/**
 * Newsletter data structure (from AI analysis)
 */
export interface NewsletterData {
  title: string;
  date: string;
  summary: string;
  insights: string[];
  apps: AppOpportunity[];
  niches: NicheOpportunity[];
  action: string;
}

/**
 * App opportunity in newsletter
 */
export interface AppOpportunity {
  name: string;
  category: string;
  rank: number;
  market: string;
  flag: string;
  opportunity: string;
  potential: number;
}

/**
 * Niche opportunity in newsletter
 */
export interface NicheOpportunity {
  title: string;
  competition: 'Low' | 'Medium' | 'High';
  competitionScore: number;
  potential: 'Low' | 'Medium' | 'High';
  potentialScore: number;
  description: string;
}

/**
 * Raw app data from Supabase
 */
export interface AppOpportunityRanked {
  id: string;
  name: string;
  developer: string;
  source_country: string;
  best_rank: number;
  category: string;
  opportunity_type: string;
  created_at: string;
}

/**
 * Subscriber data
 */
export interface Subscriber {
  id: string;
  email: string;
  status: 'subscribed' | 'unsubscribed';
  created_at: string;
  email_sent_at: string | null;
}

/**
 * Newsletter record in database
 */
export interface Newsletter {
  id: string;
  content: string;
  title: string;
  run_date: string;
  created_at: string;
}

/**
 * Webhook payload from Supabase
 */
export interface SubscribeWebhookPayload {
  id?: string;
  email: string;
  created_at?: string;
}

