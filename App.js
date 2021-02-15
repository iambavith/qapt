import * as React from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ThemeProvider } from '@draftbit/ui';
import AppNavigator from './AppNavigator';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import DraftbitTheme from './themes/DraftbitTheme.js';
import {AsyncStorage} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './AuthNav';
import FirebaseApp from './FirebaseConfig'
import BuyKeyScreen from './screens/BuyKeyScreen';

console.disableYellowBox = true

export default class App extends React.PureComponent {
  state = {
    isReady: false,
    userLogged : false,
    proUser : false,
    isLoading : true
  };

  checkUser = async() => {
      try {
        const uid = await AsyncStorage.getItem("uid")
        if(uid != null){
          this.setState({
            userLogged : true
          })
        }
      } catch (error) {
        console.log("checkUser", error.message)
      }
  }

  checkProUser = async() => {
    this.setState({isLoading : true})
    const uid = await AsyncStorage.getItem("uid")
    if(uid != null){
      FirebaseApp
    .database()
    .ref(`/users/${uid}`)
    .on("value", (snapShot) => {
      const data = snapShot.val()
      console.log(data)
      if(data.proUser == true){
        this.setState({
          proUser : true
        })
        console.log(this.state.proUser)
      }
      this.setState({isLoading : false})
    })
    }
  }

  componentDidMount(){
    this.checkUser()
    this.checkProUser()
  }

  // render() {
  //   if (!this.state.isReady) {
  //     return (
  //       <AppLoading
  //         startAsync={cacheAssetsAsync}
  //         onFinish={() => this.setState({ isReady: true })}
  //         onError={console.warn}
  //       />
  //     );
  //   } e

  //   return (
  //     <SafeAreaProvider>
  //       <ThemeProvider theme={DraftbitTheme}>
  //       <NavigationContainer>
  //         {/* {
  //           this.state.userLogged ? 
  //           <AppNavigator />
  //           :
  //           <AuthNav/>
  //         } */}
  //         </NavigationContainer>
  //       </ThemeProvider>
  //     </SafeAreaProvider>
  //   );
  // }

  render() {
    if (!this.state.isReady) {
          return (
            <AppLoading
              startAsync={cacheAssetsAsync}
              onFinish={() => this.setState({ isReady: true })}
              onError={console.warn}
            />
          );
        }
    if(!this.state.userLogged){
      return(
        <NavigationContainer>
          <AuthNav/>
        </NavigationContainer>
      )
    } 
      return(
        this.state.isLoading ? 
        <AppLoading/>
        :
        <NavigationContainer>
        {
          this.state.proUser ? 
          <AppNavigator/>
          :
          <BuyKeyScreen/>
        }
      </NavigationContainer>
      )
    
  }

}
