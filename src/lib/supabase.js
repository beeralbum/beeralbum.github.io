import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nnwnbqjzfxbgnzynrddk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ud25icWp6ZnhiZ256eW5yZGRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1MjMxOTEsImV4cCI6MjA4MjA5OTE5MX0.YRxvhOndg1ajhMTbT186yJWaDumy-bfMy2PW3-a8fN4'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
