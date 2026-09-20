'use client';

import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const supabase = createClient();

  const loginGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui', padding: 20 }}>
      <div style={{ maxWidth: 400, width: '100%', textAlign: 'center', padding: 32, border: '1px solid #e5e7eb', borderRadius: 16 }}>
        <h1 style={{ marginBottom: 8 }}>🛒 Toko Gua</h1>
        <p style={{ color: '#6b7280', marginBottom: 24 }}>Masuk untuk mulai belanja</p>
        <button onClick={loginGoogle} style={{ width: '100%', padding: '12px 20px', fontSize: 16, fontWeight: 600, border: '1px solid #d1d5db', borderRadius: 10, background: '#fff', cursor: 'pointer' }}>
          Masuk dengan Google
        </button>
      </div>
    </main>
  );
}
