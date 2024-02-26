import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://rysmuzwrlsmzdihbggoj.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5c211endybHNtemRpaGJnZ29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3NjgzOTksImV4cCI6MjAyNDM0NDM5OX0.NDbMVs-Lc8-ckHvE5rXNpQqLLKBYCFU7XAtFtukMoFQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
