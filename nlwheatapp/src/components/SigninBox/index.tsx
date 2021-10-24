import React from "react";
import { styles } from "./styles";
import { View } from "react-native";
import {useAuth} from '../../hooks/auth'
import { Button } from "../Button";
import { COLORS } from "../../theme";
export function SigninBox() {
  const { signIn, isSigningIn } = useAuth();
  return (
    
    <View style={styles.container}>
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      />
    </View>
  );
}
