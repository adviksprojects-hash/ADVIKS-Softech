'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AdviksLogo({ size = 'default', showTagline = true, href = '/' }) {
  const isCompact = size === 'compact';
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  const markSize = isCompact ? 'w-8 h-8' : isSmall ? 'w-8 h-8' : isLarge ? 'w-12 h-12' : 'w-10 h-10';

  const content = (
    <div className="flex items-center gap-2.5 group select-none">
      {/* Official Brand Logo Mark Image */}
      <div className={`relative ${markSize} rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300 p-0.5`}>
        <Image
          src="/logo-mark.png"
          alt="ADVIKS Softech Logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {isCompact ? (
        /* Sleek 2-Line Lockup for h-16 Navbar */
        <div className="flex flex-col justify-center leading-none">
          <div className="text-base font-black tracking-tight flex items-center gap-1.5 text-[#0A224E]">
            <span className="flex items-center">
              <span>AD</span>
              <span className="text-[#FF8800]">V</span>
              <span className="text-[#0062E6]">IKS</span>
            </span>
            <span className="text-xs font-black tracking-[0.18em] text-[#0A224E] uppercase">
              SOFTECH
            </span>
          </div>
          {showTagline && (
            <div className="text-[8px] text-slate-500 font-extrabold tracking-widest uppercase flex items-center gap-1 mt-1">
              <span>DESIGN</span>
              <span className="text-[#FF8800] text-[9px] font-black">•</span>
              <span>DEVELOP</span>
              <span className="text-[#FF8800] text-[9px] font-black">•</span>
              <span>DELIVER</span>
            </div>
          )}
        </div>
      ) : (
        /* Standard 3-Stack Lockup */
        <div className="flex flex-col">
          <div className={`font-black tracking-tight leading-none ${isSmall ? 'text-lg' : isLarge ? 'text-2xl' : 'text-xl'} flex items-center`}>
            <span className="text-[#0A224E]">AD</span>
            <span className="text-[#FF8800]">V</span>
            <span className="text-[#0062E6]">IKS</span>
          </div>

          <div className="text-[9px] font-black tracking-[0.22em] text-[#0A224E] leading-tight flex items-center gap-1 mt-0.5">
            <span className="h-[1px] w-2 bg-[#0A224E]/50" />
            <span>SOFTECH</span>
            <span className="h-[1px] w-2 bg-[#0A224E]/50" />
          </div>

          {showTagline && (
            <div className="text-[9px] text-slate-500 font-bold tracking-wider uppercase flex items-center gap-1 mt-0.5">
              <span>DESIGN</span>
              <span className="text-[#FF8800] text-xs font-black">•</span>
              <span>DEVELOP</span>
              <span className="text-[#FF8800] text-xs font-black">•</span>
              <span>DELIVER</span>
            </div>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
