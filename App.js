import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import { AuthContextProvider } from './src/context/AuthContext';
import { AppContextProvider } from './src/context/AppContext';
import { Navigation } from "./src/navigators/Navigation";

const App = () => {

  const [loaded] = useFonts({
    Shamel: require('./assets/fonts/shamel.ttf'),
    Taleeq: require('./assets/fonts/taleeq.ttf')
  });

  if (!loaded) { 
    return null;
  }

  return (
    <AuthContextProvider>
      <AppContextProvider>
      <Navigation  /> 
      <ExpoStatusBar style="auto" />
      </AppContextProvider>
    </AuthContextProvider>
  );
};

export default App;
