import { createDrawerNavigator } from '@react-navigation/drawer';
import { View  } from 'react-native';
import TabNavigator from './TabNavigator';
import UserAccountScreen from '../screens/UserAccountScreen';
import SignupScreen from '../screens/SignupScreen';
import FaqScreen from '../screens/FaqScreen';
import WhoWeAreScreen from '../screens/WhoWeAreScreen';
import {COLORS , FONTFAMILY} from '../config/theme/theme';
import { useNavigation } from "@react-navigation/native";
import { MainHeader } from '../common/Headers/MainHeader';
import { DrawerContentComponent } from "../common/Drawers/DrawerContentComponent";
import LoadingScreen from '../screens/LoadingScreen';
import { HeaderScreenGoBack } from '../common/Headers/HeaderScreenGoBack';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountOptions from '../screens/CreateAccountOptions';
import SplashScreenOne from '../screens/splash/SplashScreenOne';
import SplashScreenTwo from '../screens/splash/SplashScreenTwo';
import SplashScreenThree from '../screens/splash/SplashScreenThree';
import EventDetailScreen from '../screens/EventDetailScreen';


const Drawer = createDrawerNavigator();

export const AppNavigator = () => {

  let navigation = useNavigation();

  return (
    <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: COLORS.White,
          inactiveTintColor: COLORS.White,
          activeBackgroundColor: 'transparent',
          inactiveBackgroundColor: 'transparent',
        }}
        initialRouteName="HomeScreen"
        drawerContent={
          (props) => {
            return (
              <DrawerContentComponent props={props} />
            )
          }
        }
     screenOptions={{
      header: (props) => <MainHeader {...props} />,
      drawerStyle: {
        backgroundColor: COLORS.BlackTheme,
        width: 235,
      },
      headerStyle: {
        backgroundColor: COLORS.BlackTheme,
      },
      headerTintColor: COLORS.BlackTheme,
      headerTitleStyle: {
        fontWeight: "bold",
      },
      drawerLabelStyle: {
        color: COLORS.White,
        fontFamily: FONTFAMILY.secondary
      },
      drawerPosition: "left", 
      }}
    >

<Drawer.Screen
      name="HomeScreen"
      options={{
        drawerLabel: "الرئيسية",
        title: "Home",
        IconCategory: 'Octicons',
        iconName: 'home',
       
      }}
      component={TabNavigator}
    />


    <Drawer.Screen
      name="Account"
      options={{
        drawerLabel: "الحساب",
        IconCategory: 'AntDesign',
        iconName: 'user',
      }}
      component={UserAccountScreen}
    />





<Drawer.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{
        drawerLabel: "تسجيل الدخول",
        IconCategory: 'AntDesign',
        iconName: 'login',
        header: (props) => <HeaderScreenGoBack navigation={navigation} title={"تسجيل الدخول"} />
      }}
    />

     
<Drawer.Screen
      name="FaqScreen"
      component={FaqScreen}
       options={{
    drawerLabel: 'الاسئلة الشائعة',
    header: (props) => <HeaderScreenGoBack navigation={navigation} title={"Faq"} />
      }}
    />

{/* <Drawer.Screen
      name="SignupScreen"
      component={SignupScreen}
      options={{
    drawerLabel: '',
    header: (props) => <HeaderScreenGoBack navigation={navigation} title={"Create Account"} />
      }}
    /> */}


    <Drawer.Screen
      name="WhoWeAreScreen"
      component={WhoWeAreScreen}
       options={{
    drawerLabel: '',
    header: (props) => <HeaderScreenGoBack navigation={navigation} title={"Who we are"} />
      }}
    />

    <Drawer.Screen
      name="SplashScreenOne"
      component={SplashScreenOne}
       options={{
    drawerLabel: '',
    header: (props) => <HeaderScreenGoBack navigation={navigation} title={""} />
      }}
    />

    <Drawer.Screen
      name="SplashScreenTwo"
      component={SplashScreenTwo}
       options={{
    drawerLabel: '',
    header: (props) => <HeaderScreenGoBack navigation={navigation} title={""} />
      }}
    />

    <Drawer.Screen
      name="SplashScreenThree"
      component={SplashScreenThree}
       options={{
    drawerLabel: '',
    header: (props) => <HeaderScreenGoBack navigation={navigation} title={""} />
      }}
    />

    <Drawer.Screen
      name="EventDetailScreen"
      component={EventDetailScreen}
       options={{
    drawerLabel: '',
    header: (props) => <HeaderScreenGoBack navigation={navigation} title={""} />
      }}
    />




    <Drawer.Screen
      name="Loading"
      options={{
        drawerLabel: '',
        header: (props) => <View />
          }}
      component={LoadingScreen}
    />
   
  
  </Drawer.Navigator>
  );
};

