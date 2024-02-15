import { createClient } from '@supabase/supabase-js';

const url = "https://svqubdprnzkhvgwslxzw.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2cXViZHBybnpraHZnd3NseHp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNDg4ODUsImV4cCI6MjAyMjcyNDg4NX0.Hiwb8nFPsZJO4--k0iS0bSCy_8ivhaF4pFLNlV_tSB0";

export const supabase = createClient(url, key);