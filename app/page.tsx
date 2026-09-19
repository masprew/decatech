import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const logout = async () => {
    'use server';
    const supabase = await createClient();
    await supabase.auth.signOut();
  };

  return (
    <main style={{ padding: 32, fontFamily: 'system-ui', maxWidth: 640, margin: '0 auto' }}>
      <h1>🛒 Toko Gua</h1>

      {user ? (
        <div style={{ marginTop: 24, padding: 20, border: '1px solid #e5e7eb', borderRadius: 12 }}>
          <p style={{ margin: 0 }}>Login sebagai:</p>
          <p style={{ fontWeight: 600, marginTop: 4 }}>{user.email}</p>
          <form action={logout} style={{ marginTop: 12 }}>
            <button type="submit" style={{
              padding: '8px 16px', background: '#ef4444', color: '#fff',
              border: 'none', borderRadius: 8, cursor: 'pointer',
            }}>
              Logout
            </button>
          </form>
        </div>
      ) : (
        <div style={{ marginTop: 24 }}>
          <p>Kamu belum login.</p>
          <Link href="/login" style={{
            display: 'inline-block', padding: '10px 20px',
            background: '#2563eb', color: '#fff',
            textDecoration: 'none', borderRadius: 8,
          }}>
            Masuk
          </Link>
        </div>
      )}
    </main>
  );
}
