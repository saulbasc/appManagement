import React, { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { Session } from "@supabase/supabase-js";
import supabase from "../lib/supabase";
import { navigate } from "../navigationRef";

function InitManager() {
  const [sesion, setSesion] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSesion(session);
      setIsLoading(false);
    });
    supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setSesion(session);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (sesion !== null) {
        navigate("BottomTab");
      } else {
        navigate("Signin");
      }
    }
  }, [sesion, isLoading]);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
}

export default InitManager;
