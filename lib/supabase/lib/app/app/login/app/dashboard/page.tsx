import Link from "next/link";
import { redirect } from "next/navigation";
import { createServerClientWithAuth } from "@/lib/supabase/server";

export default async function Dashboard() {
  const supabase = createServerClientWithAuth();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Panel de retos</h1>
      <p>Bienvenido, {user.email}</p>
      <p>Aquí irá tu cuestionario y tus retos.</p>
    </div>
  );
}
