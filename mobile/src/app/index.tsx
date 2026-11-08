import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import Auth from "./(auth)/login";
import Account from "../components/ui/account";
import { View } from "react-native";
import { Redirect } from "expo-router";

export default function App() {
  const [userId, setUserId] = useState<string | null>(null);
  const [email, setEmail] = useState<string | undefined>(undefined);

  useEffect(() => {
    supabase.auth.getClaims().then(({ data }) => {
      const claims = data?.claims;
      if (claims) {
        setUserId(claims.sub);
        setEmail(claims.email);
      }
    });

    supabase.auth.onAuthStateChange(async (_event, _session) => {
      const { data } = await supabase.auth.getClaims();
      const claims = data?.claims;
      if (claims) {
        setUserId(claims.sub);
        setEmail(claims.email);
      } else {
        setUserId(null);
        setEmail(undefined);
      }
    });
  }, []);

  return (
    <View>
      {userId ? (
        // <Account key={userId} userId={userId} email={email} />
        <Redirect href={"/(app)/student"} />
      ) : (
        <Auth />
      )}
    </View>
  );
}
