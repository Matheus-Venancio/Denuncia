import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yxruawliddeyurfmqzgn.supabase.co'
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4cnVhd2xpZGRleXVyZm1xemduIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzA3MTI5MiwiZXhwIjoyMDY4NjQ3MjkyfQ.2VEAILD2EHdr-NEc-MACSva-DiqxfPahmNJ-OnHqqVs'

export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})
