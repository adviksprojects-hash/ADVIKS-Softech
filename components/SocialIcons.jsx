import React from 'react';

export function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function LinkedinIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function XIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function DiscordIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function ThreadsIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.247 18.28 1.44 15.093 1.594 11c.203-5.385 4.398-9.646 9.877-9.98C17.472.646 22 5.17 22 10.975c0 6.643-5.074 11.236-11.758 11.236-2.28 0-4.325-.56-5.918-1.618a.75.75 0 0 1 .83-1.25c1.353.898 3.125 1.368 5.088 1.368 5.757 0 10.258-3.87 10.258-9.736 0-4.992-3.856-8.986-9.13-8.665-4.664.284-8.232 3.931-8.406 8.59-.136 3.65.577 6.398 2.122 8.167 1.547 1.77 3.844 2.668 6.828 2.671 2.502 0 4.544-.657 5.908-1.9 1.428-1.3 2.067-3.177 1.849-5.431-.383-3.957-3.498-5.35-6.287-5.35-1.503 0-2.883.424-3.992 1.226-.814.588-1.385 1.378-1.652 2.287a3.487 3.487 0 0 0 .548 3.018c.616.793 1.564 1.258 2.602 1.277 1.246.022 2.385-.503 3.045-1.408.204-.28.59-.344.871-.141.28.204.344.59.141.871-.88 1.206-2.43 1.905-4.103 1.875-1.413-.026-2.705-.658-3.544-1.737a4.982 4.982 0 0 1-.784-4.31c.382-1.298 1.198-2.428 2.361-3.268C8.983 6.95 10.748 6.42 12.596 6.42c3.551 0 7.378 1.83 7.828 6.477.26 2.693-.51 4.945-2.228 6.512-1.624 1.482-4.043 2.259-7.01 2.259z" />
    </svg>
  );
}

export function YoutubeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function TelegramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.941z" />
    </svg>
  );
}

export function BehanceIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.663 0-6-2.613-6-6s2.337-6 6-6c3.744 0 5.82 2.684 5.726 6.5h-8.726c.074 1.583 1.139 2.5 2.5 2.5 1.144 0 1.954-.604 2.226-1.5h3zm-5.726-5c-.074-1.258-.871-2-2.226-2-1.311 0-2.188.756-2.274 2h4.5zm-11-7h-7v14h7.5c2.756 0 4.5-1.5 4.5-4 0-1.614-.906-2.884-2.23-3.488 1.004-.57 1.73-1.688 1.73-3.012 0-2.209-1.791-3.5-4.5-3.5zm-4 3h3.5c1.103 0 2 .673 2 1.5s-.897 1.5-2 1.5h-3.5v-3zm0 5h4c1.103 0 2 .897 2 2s-.897 2-2 2h-4v-4z" />
    </svg>
  );
}

export function DribbbleIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  );
}

export function WebsiteIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

/**
 * Universal Platform Icon Dispatcher
 * Matches platform string case-insensitively and returns matching SVG icon
 */
export function PlatformIcon({ platform = '', className = 'w-4 h-4' }) {
  const p = (platform || '').toLowerCase();

  if (p.includes('discord')) return <DiscordIcon className={className} />;
  if (p.includes('insta')) return <InstagramIcon className={className} />;
  if (p.includes('thread')) return <ThreadsIcon className={className} />;
  if (p.includes('twitter') || p === 'x' || p.includes('x /') || p.includes('x (')) return <XIcon className={className} />;
  if (p.includes('youtube') || p.includes('yt')) return <YoutubeIcon className={className} />;
  if (p.includes('telegram') || p.includes('tg')) return <TelegramIcon className={className} />;
  if (p.includes('github') || p.includes('git')) return <GithubIcon className={className} />;
  if (p.includes('linkedin')) return <LinkedinIcon className={className} />;
  if (p.includes('behance')) return <BehanceIcon className={className} />;
  if (p.includes('dribbble')) return <DribbbleIcon className={className} />;

  return <WebsiteIcon className={className} />;
}
