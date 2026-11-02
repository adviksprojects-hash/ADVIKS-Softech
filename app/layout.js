import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import FloatingAuditPill from "@/components/FloatingAuditPill";

export const metadata = {
  title: "ADVIKS Softech | Next-Gen Enterprise Software & Growth Marketing",
  description: "Enterprise software development, cloud infrastructure, AI solutions, and high-impact digital marketing by ADVIKS Softech.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
        <AuthProvider>
          {children}
          <FloatingAuditPill />
        </AuthProvider>
      </body>
    </html>
  );
}
