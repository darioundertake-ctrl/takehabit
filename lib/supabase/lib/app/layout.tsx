import "./globals.css";
import Link from "next/link";

export const metadata = { title: "TechHabit", description: "Retos personalizados" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50">
        <header className="p-4 border-b bg-white">
          <nav className="max-w-3xl mx-auto flex gap-4">
            <Link href="/">Inicio</Link>
            <Link href="/dashboard">Panel</Link>
            <Link href="/login">Login</Link>
          </nav>
        </header>
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
