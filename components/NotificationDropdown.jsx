'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEmployeeAuth } from '@/context/EmployeeAuthContext';
import {
  Bell,
  CheckCircle2,
  Clock,
  Check,
  FolderKanban,
  CheckSquare,
  IndianRupee,
  LifeBuoy,
  Receipt,
  Kanban,
  Send,
  X,
  Sparkles,
  Users,
  Shield,
  MessageSquare,
} from 'lucide-react';

export default function NotificationDropdown({ target = 'admin' }) {
  const router = useRouter();
  const {
    notifications,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    sendBroadcastNotification,
    currentUser,
    currentClient,
    clients,
  } = useEmployeeAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('ALL'); // 'ALL' or 'UNREAD'
  const [showBroadcastModal, setShowBroadcastModal] = useState(false);

  // Broadcast modal form state
  const [broadcastTarget, setBroadcastTarget] = useState('admin');
  const [broadcastClientEmail, setBroadcastClientEmail] = useState('');
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [broadcastType, setBroadcastType] = useState('project');
  const [broadcastSuccess, setBroadcastSuccess] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter notifications based on target mode
  const relevantNotifications = notifications.filter((n) => {
    if (target === 'admin') {
      return n.target === 'admin';
    } else {
      // Client mode: show client notifications matching current client email or all client notices
      return (
        n.target === 'client' &&
        (!n.clientEmail ||
          !currentClient?.email ||
          n.clientEmail.toLowerCase() === currentClient?.email?.toLowerCase())
      );
    }
  });

  const unreadCount = relevantNotifications.filter((n) => !n.read).length;

  const displayedNotifications = relevantNotifications.filter((n) => {
    if (filter === 'UNREAD') return !n.read;
    return true;
  });

  const getIconForType = (type) => {
    switch (type) {
      case 'project':
        return <FolderKanban className="w-3.5 h-3.5 text-blue-400" />;
      case 'task':
        return <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />;
      case 'finance':
        return <IndianRupee className="w-3.5 h-3.5 text-amber-400" />;
      case 'ticket':
        return <LifeBuoy className="w-3.5 h-3.5 text-purple-400" />;
      case 'invoice':
        return <Receipt className="w-3.5 h-3.5 text-indigo-400" />;
      case 'lead':
        return <Kanban className="w-3.5 h-3.5 text-orange-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  const handleNotificationClick = (notif) => {
    markNotificationAsRead(notif.id);
    setIsOpen(false);
    if (notif.link) {
      router.push(notif.link);
    }
  };

  const handleSendBroadcast = (e) => {
    e.preventDefault();
    if (!broadcastTitle || !broadcastMessage) return;

    sendBroadcastNotification({
      target: broadcastTarget,
      clientEmail: broadcastClientEmail,
      title: broadcastTitle.trim(),
      message: broadcastMessage.trim(),
      type: broadcastType,
      link: broadcastTarget === 'admin' ? '/admin/projects' : '/dashboard/projects',
    });

    setBroadcastSuccess(true);
    setBroadcastTitle('');
    setBroadcastMessage('');

    setTimeout(() => {
      setBroadcastSuccess(false);
      setShowBroadcastModal(false);
    }, 1500);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl bg-white border border-[#E2E8F0] text-[#0A224E] hover:text-[#0062E6] hover:bg-[#F8FAFC] transition-colors relative shadow-2xs"
        aria-label="View notifications"
        title="Notifications"
      >
        <Bell className="w-4 h-4 text-[#0A224E]" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-gradient-to-r from-[#FF8800] to-[#EA580C] px-1 text-[9px] font-extrabold text-white shadow-xs animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Popover Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl bg-white border border-[#E2E8F0] shadow-xl z-50 overflow-hidden text-[#0A224E] animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Header */}
          <div className="p-4 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[#0A224E] text-xs uppercase tracking-wider">
                {target === 'admin' ? 'Super Admin Alerts' : 'Client Updates'}
              </span>
              {unreadCount > 0 && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-200">
                  {unreadCount} Unread
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={() => markAllNotificationsAsRead(target)}
                  className="text-[11px] text-[#0062E6] hover:underline font-bold transition-colors"
                >
                  Mark all read
                </button>
              )}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="px-4 py-2 bg-[#F8FAFC]/50 border-b border-[#E2E8F0] flex items-center gap-1.5 text-[11px]">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${filter === 'ALL'
                  ? 'bg-white text-[#0A224E] border border-[#E2E8F0] shadow-2xs'
                  : 'text-[#475569] hover:text-[#0A224E]'
                }`}
            >
              All ({relevantNotifications.length})
            </button>
            <button
              onClick={() => setFilter('UNREAD')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${filter === 'UNREAD'
                  ? 'bg-white text-[#0A224E] border border-[#E2E8F0] shadow-2xs'
                  : 'text-[#475569] hover:text-[#0A224E]'
                }`}
            >
              Unread ({unreadCount})
            </button>
          </div>

          {/* Notification List */}
          <div className="max-h-80 overflow-y-auto divide-y divide-[#E2E8F0]">
            {displayedNotifications.length === 0 ? (
              <div className="py-10 text-center text-[#475569] text-xs px-4">
                <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-emerald-500" />
                <span>You are all caught up! No notifications.</span>
              </div>
            ) : (
              displayedNotifications.map((n) => (
                <div
                  key={n.id}
                  onClick={() => handleNotificationClick(n)}
                  className={`p-3.5 hover:bg-[#F8FAFC] transition-colors cursor-pointer flex items-start gap-3 relative ${!n.read ? (target === 'admin' ? 'bg-[#FFF7ED]/50' : 'bg-[#EFF6FF]/60') : 'bg-white'
                    }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0 mt-0.5">
                    {getIconForType(n.type)}
                  </div>

                  <div className="flex-1 min-w-0 pr-4">
                    <div className="text-xs font-bold text-[#0A224E] truncate">{n.title}</div>
                    <p className="text-[11px] text-[#475569] line-clamp-2 mt-0.5 leading-relaxed">
                      {n.message}
                    </p>
                    <span className="text-[10px] text-slate-400 mt-1 block font-mono">
                      {n.createdAt}
                    </span>
                  </div>

                  {!n.read && (
                    <span className="w-2 h-2 rounded-full bg-[#FF8800] shrink-0 mt-1.5" />
                  )}
                </div>
              ))
            )}
          </div>

          {/* Bottom Action Footer */}
          <div className="p-3 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between text-xs">
            {target === 'admin' ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowBroadcastModal(true);
                }}
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white font-extrabold flex items-center justify-center gap-1.5 transition-all shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>+ Broadcast Notification</span>
              </button>
            ) : (
              <Link
                href="/dashboard/tickets"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-1.5 text-[11px] text-[#0062E6] hover:underline font-bold"
              >
                Need Help? Raise Engineering Ticket →
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Broadcast Notification Modal */}
      {showBroadcastModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white border border-[#E2E8F0] rounded-3xl p-6 sm:p-7 shadow-2xl text-[#0A224E]">
            <button
              onClick={() => setShowBroadcastModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F8FAFC] hover:bg-slate-200 text-[#475569] hover:text-[#0A224E] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF7ED] text-[#EA580C] border border-orange-200 text-xs font-bold mb-3">
              <Send className="w-3.5 h-3.5 text-[#FF8800]" />
              <span>Admin Broadcast Engine</span>
            </div>

            <h3 className="text-xl font-extrabold text-[#0A224E]">
              Send Live Notification
            </h3>
            <p className="text-xs text-[#475569] mt-1">
              Dispatch a real-time notification to the entire team or directly to a client workspace.
            </p>

            {broadcastSuccess && (
              <div className="my-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Notification dispatched successfully!</span>
              </div>
            )}

            <form onSubmit={handleSendBroadcast} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-1">
                    Target Audience *
                  </label>
                  <select
                    value={broadcastTarget}
                    onChange={(e) => setBroadcastTarget(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] focus:outline-none focus:border-[#0062E6]"
                  >
                    <option value="admin">Internal Team (Super Admin)</option>
                    <option value="client">Client Portal (Client View)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-1">
                    Notification Category
                  </label>
                  <select
                    value={broadcastType}
                    onChange={(e) => setBroadcastType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] focus:outline-none focus:border-[#0062E6]"
                  >
                    <option value="project">Project / Milestone Update</option>
                    <option value="task">Sprint Task Deliverable</option>
                    <option value="finance">Finance / Billing</option>
                    <option value="ticket">Support / Helpdesk</option>
                  </select>
                </div>
              </div>

              {broadcastTarget === 'client' && (
                <div>
                  <label className="block text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-1">
                    Select Specific Client (or leave blank for all)
                  </label>
                  <select
                    value={broadcastClientEmail}
                    onChange={(e) => setBroadcastClientEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] focus:outline-none focus:border-[#0062E6]"
                  >
                    <option value="">All Active Clients</option>
                    {clients.map((c) => (
                      <option key={c.id} value={c.email}>
                        {c.name} ({c.email})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-1">
                  Notification Title *
                </label>
                <input
                  type="text"
                  required
                  value={broadcastTitle}
                  onChange={(e) => setBroadcastTitle(e.target.value)}
                  placeholder="e.g. Critical Milestone 03 Released for Review"
                  className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-1">
                  Message Body *
                </label>
                <textarea
                  rows={3}
                  required
                  value={broadcastMessage}
                  onChange={(e) => setBroadcastMessage(e.target.value)}
                  placeholder="Write message details for the recipient..."
                  className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#0A224E] placeholder:text-slate-400 focus:outline-none focus:border-[#0062E6] leading-relaxed"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={() => setShowBroadcastModal(false)}
                  className="py-2 px-4 rounded-xl border border-[#E2E8F0] text-xs font-bold text-[#475569] hover:bg-[#F8FAFC] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-5 rounded-xl bg-gradient-to-r from-[#FF8800] to-[#EA580C] hover:opacity-95 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Notification</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

