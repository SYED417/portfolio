import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables.\n' +
    'Please create a .env file in the project root with:\n' +
    '  VITE_SUPABASE_URL=https://your-project.supabase.co\n' +
    '  VITE_SUPABASE_ANON_KEY=your-anon-key'
  );
}

// Warn if the key doesn't look like a valid Supabase JWT
if (!supabaseAnonKey.startsWith('eyJ')) {
  console.error(
    '%c⚠️ INVALID SUPABASE KEY',
    'color:red;font-size:16px;font-weight:bold',
    '\nYour VITE_SUPABASE_ANON_KEY does not look like a valid Supabase anon key.',
    '\nCurrent key starts with:', supabaseAnonKey.substring(0, 20) + '...',
    '\nValid keys are JWT tokens starting with "eyJhbGci..."',
    '\n\nFix: Go to https://supabase.com/dashboard → Your Project → Settings → API → copy the "anon public" key.',
    '\nThen paste it into your .env file as VITE_SUPABASE_ANON_KEY=eyJ...'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
