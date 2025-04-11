import { supabase } from "../lib/supabase";
import { Alert } from "react-native";
import { navigate } from "../navigationRef";

const signInEmail = async ({ email, password } : any) => {
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error){
        Alert.alert(error.message)
    } else {
        navigate('CourseList')
    }
}   

const signUpEmail = async ({ email, password }: any) => {
    const {
        data: { session },
        error,
    } = await supabase.auth.signUp({
        email,
        password,
    })

    if (error){ Alert.alert(error.message);
    } else if( !session ){ Alert.alert ('Please check your inbox for email verification');
    } else { navigate('CourseList') }
}

export {signInEmail, signUpEmail};