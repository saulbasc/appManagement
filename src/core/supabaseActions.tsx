import supabase from '../lib/supabase';

async function SignInEmail({ email, password }: any) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

async function SignUpEmail({ email, password }: any) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
}

async function FetchData(tableName: string) {
  const { data, error } = await supabase
    .from(tableName)
    .select();
  return { data, error };
}

async function FetchDataWithFilter(tableName: string, filter: string) {
  const { data, error } = await supabase
    .from(tableName)
    .select()
    .eq('ID', filter);
  return { data, error };
}

async function Insert(tableName: string, data: any) {
  const { error } = await supabase
    .from(tableName)
    .insert(data);
  return { error };
}

export {
  SignInEmail, SignUpEmail, FetchData, FetchDataWithFilter, Insert,
};
