import { Alert } from 'react-native';
import { navigate } from '../navigationRef';
import { SignInEmail, SignUpEmail } from '../core/supabaseActions';
import supabase from '../lib/supabase';

const signInEmail = async ({ email, password } : any) => {
  const { error } = await SignInEmail({ email, password });
  if (error) {
    Alert.alert(error.message);
  } else {
    navigate('BottomTab');
  }
};

const signUpEmail = async ({ email, password }: any) => {
  const { data, error } = await SignUpEmail({ email, password });
  if (error) {
    Alert.alert(error.message);
  } else {
    await supabase.from('usuario').insert({ ID: data.user?.id, email: data.user?.email, rol: 'User' });
    navigate('BottomTab');
  }
};

export { signInEmail, signUpEmail };
