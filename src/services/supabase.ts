import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Lazy initialization to avoid crash on startup
let supabaseClient: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
  if (!supabaseClient) {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('SUPABASE_URL and SUPABASE_SERVICE_KEY are required in environment variables');
    }
    
    supabaseClient = createClient(supabaseUrl, supabaseKey);
  }
  return supabaseClient;
}

// Types
export interface Newsletter {
  id: string;
  content: string;
  title: string;
  run_date: string;
  created_at: string;
}

export interface Subscriber {
  id: string;
  email: string;
  status: string;
  created_at: string;
  email_sent_at: string | null;
}

/**
 * Get the most recent newsletter
 */
export async function getLatestNewsletter(): Promise<Newsletter | null> {
  const { data, error } = await getSupabase()
    .from('newsletters')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    console.error('Error fetching latest newsletter:', error);
    return null;
  }

  return data;
}

/**
 * Update subscriber's email_sent_at timestamp
 */
export async function updateSubscriberEmailSentAt(email: string): Promise<void> {
  const { error } = await getSupabase()
    .from('newsletter_subscribers')
    .update({ email_sent_at: new Date().toISOString() })
    .eq('email', email);

  if (error) {
    console.error('Error updating subscriber:', error);
    throw error;
  }
}

/**
 * Get all active subscribers
 */
export async function getActiveSubscribers(): Promise<Subscriber[]> {
  const { data, error } = await getSupabase()
    .from('newsletter_subscribers')
    .select('*')
    .eq('status', 'subscribed');

  if (error) {
    console.error('Error fetching subscribers:', error);
    return [];
  }

  return data || [];
}

/**
 * Save a new newsletter to the database
 */
export async function saveNewsletter(content: string, title: string): Promise<void> {
  const { error } = await getSupabase()
    .from('newsletters')
    .insert({
      content,
      title,
      run_date: new Date().toISOString().split('T')[0]
    });

  if (error) {
    console.error('Error saving newsletter:', error);
    throw error;
  }
}
