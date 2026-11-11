import { NextResponse } from 'next/server';
import { query } from '@/lib/neon';

/**
 * GET /api/admin/users
 * Returns list of all registered users, roles, and status from Neon PostgreSQL
 */
export async function GET() {
  try {
    const users = await query(`
      SELECT 
        id, 
        email, 
        full_name, 
        role, 
        is_active, 
        company_name, 
        avatar_url, 
        provider, 
        created_at, 
        updated_at
      FROM users
      ORDER BY 
        CASE WHEN role = 'ADMIN' THEN 1 ELSE 2 END,
        created_at DESC
    `);

    return NextResponse.json({ success: true, users: users || [] });
  } catch (error) {
    console.error('Failed to fetch users from Neon DB:', error);
    return NextResponse.json(
      { success: false, error: 'Database query failed: ' + error.message },
      { status: 500 }
    );
  }
}

/**
 * POST /api/admin/users
 * Adds a new authorized user and role directly into Neon PostgreSQL
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { email, fullName, role, companyName } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid email address is required.' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const targetRole = role === 'ADMIN' ? 'ADMIN' : 'CLIENT';

    // Check if user already exists
    const existing = await query(
      'SELECT id, email, role FROM users WHERE LOWER(email) = $1 LIMIT 1',
      [normalizedEmail]
    );

    if (existing && existing.length > 0) {
      // Update role and activate if existing
      const updated = await query(
        `UPDATE users 
         SET role = $1, full_name = COALESCE($2, full_name), company_name = COALESCE($3, company_name), is_active = true, updated_at = CURRENT_TIMESTAMP
         WHERE id = $4
         RETURNING id, email, full_name, role, is_active, company_name`,
        [targetRole, fullName || null, companyName || null, existing[0].id]
      );
      return NextResponse.json({
        success: true,
        message: `User ${normalizedEmail} updated with role ${targetRole}.`,
        user: updated[0],
      });
    }

    // Insert new authorized user
    const insertRes = await query(
      `INSERT INTO users (email, full_name, role, company_name, is_active, provider)
       VALUES ($1, $2, $3, $4, true, 'google')
       RETURNING id, email, full_name, role, is_active, company_name, created_at`,
      [normalizedEmail, fullName || normalizedEmail.split('@')[0], targetRole, companyName || null]
    );

    return NextResponse.json({
      success: true,
      message: `Authorized ${normalizedEmail} with role ${targetRole}.`,
      user: insertRes[0],
    });
  } catch (error) {
    console.error('Failed to create user in Neon DB:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/admin/users
 * Updates a user's role (ADMIN <-> CLIENT) or active status (true <-> false)
 */
export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, role, isActive } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'User ID is required.' },
        { status: 400 }
      );
    }

    const updates = [];
    const params = [];
    let idx = 1;

    if (role !== undefined) {
      updates.push(`role = $${idx++}`);
      params.push(role === 'ADMIN' ? 'ADMIN' : 'CLIENT');
    }

    if (isActive !== undefined) {
      updates.push(`is_active = $${idx++}`);
      params.push(Boolean(isActive));
    }

    updates.push(`updated_at = CURRENT_TIMESTAMP`);
    params.push(id);

    const updateQuery = `
      UPDATE users 
      SET ${updates.join(', ')} 
      WHERE id = $${idx} 
      RETURNING id, email, full_name, role, is_active, updated_at
    `;

    const result = await query(updateQuery, params);

    if (!result || result.length === 0) {
      return NextResponse.json(
        { success: false, error: 'User not found in database.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `User ${result[0].email} successfully updated.`,
      user: result[0],
    });
  } catch (error) {
    console.error('Failed to update user in Neon DB:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/admin/users
 * Revokes / Deletes user from Neon DB
 */
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'User ID is required.' },
        { status: 400 }
      );
    }

    await query('DELETE FROM users WHERE id = $1', [id]);

    return NextResponse.json({
      success: true,
      message: 'User removed from database authority.',
    });
  } catch (error) {
    console.error('Failed to delete user from Neon DB:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
