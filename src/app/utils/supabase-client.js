
import { createClient } from '@supabase/supabase-js'

export function getClient() {
  const supabase = createClient('https://uctbeefthbopurqnxuvv.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)
  return supabase;
}

export async function insertCard(card) {
  const supabase = getClient()

  const { error } = await supabase.from('Cards').insert(card)
}

export async function findCards() {
  const supabase = getClient()

  const { data: Cards, error } = await supabase
  .from('Cards')
  .select("*")
  return Cards
}