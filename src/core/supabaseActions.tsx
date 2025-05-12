import supabase from "../lib/supabase";

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

async function SearchByText(tableName: string, column: string, text: string) {
  const { data, error } = await supabase
    .from(tableName)
    .select()
    .ilike(column, `%${text}%`);
  return { data, error };
}

async function LogOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

async function GetID() {
  const id = (await supabase.auth.getUser()).data.user?.id;
  return id;
}

export { SignInEmail, SignUpEmail, LogOut, SearchByText, GetID };
