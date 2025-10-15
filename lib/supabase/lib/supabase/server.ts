import { cookies, headers } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export function createServerClientWithAuth() {
  const cookieStore = cookies();
  const headerList = headers();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: any) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
      headers: {
        "x-forwarded-host": headerList.get("x-forwarded-host") ?? undefined,
        "x-forwarded-proto": headerList.get("x-forwarded-proto") ?? undefined,
      },
    }
  );
}
