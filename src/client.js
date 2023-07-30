import { createClient } from '@supabase/supabase-js';

const URL = import.meta.env.VITE_SUPABASE_URL
const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY


// const URL = 'https://covnxxxckhwwsmistvjd.supabase.co'
// const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvdm54eHhja2h3d3NtaXN0dmpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1OTg5MjEsImV4cCI6MjAwNDE3NDkyMX0.L8ZP98Y_3TzeSPPikiAwGMpAjOG2f7Lu5yklJMNO5Tk';

export const supabase = createClient(URL, API_KEY);