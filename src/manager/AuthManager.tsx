import { Alert } from 'react-native';
import { navigate } from '../navigationRef';
import { SignInEmail, SignUpEmail, Insert } from '../core/supabaseActions';

const signInEmail = async ({ email, password } : any) => {
  const { error } = await SignInEmail({ email, password });
  if (error) {
    Alert.alert(error.message);
  } else {
    navigate('CourseList');
  }
};

const signUpEmail = async ({ email, password }: any) => {
  const { data, error } = await SignUpEmail({ email, password });
  if (error) {
    Alert.alert(error.message);
  } else {
    Insert('Usuario', { ID: data.user?.id, email: data.user?.email, rol: 'User' });
    navigate('CourseList');
  }
};

export { signInEmail, signUpEmail };
