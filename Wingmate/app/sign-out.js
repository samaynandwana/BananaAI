import { Redirect } from "expo-router";
import { withAuthenticator } from "aws-amplify-react-native";
import theme from "../src/auth-theme";

function SignOut() {
  return (
    <Redirect href='/' />
  )
}

export default withAuthenticator(SignOut, {theme: theme});