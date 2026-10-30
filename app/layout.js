import "./globals.css";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "ADVIKS Softech | Next-Gen Enterprise Software & Growth Marketing",
  description: "Enterprise software development, cloud infrastructure, AI solutions, and high-impact digital marketing by ADVIKS Softech.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
