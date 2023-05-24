import { AmplifyTheme } from "aws-amplify-react-native";
import tw from 'twrnc';

const theme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    ...tw`bg-[#5C1219] rounded-xl`
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    ...tw`bg-[#6C5259] rounded-xl`
  }
}

export default theme;