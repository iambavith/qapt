import React from 'react';
import Images from '../config/Images';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import FirebaseApp from '../FirebaseConfig'
import {AsyncStorage} from "react-native"

const LoginWithEmailENScreen = props => {
  const [emailinput, setEmailinput] = React.useState(null);
  const [passwordinput, setPasswordinput] = React.useState(null);
  const { theme } = props;
  const { navigation } = props;

  const onPressvnPYQjT4 = item => {
    const data = item;
    navigation.navigate('RegisterWithEmailDEScreen', {});
  };
  const onPressTOsyYqNY = item => {
    const data = item;
    logIn()
  };

  const logIn = () => {
    try {

      const email = emailinput
      const password = passwordinput
      
      if(email != null){

        FirebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          saveId(response.user.uid)
          .then(() => {
            FirebaseApp
            .database()
            .ref(`/users/${response.user.uid}`)
            .on('value',(snapShot) => {
              const data = snapShot.val()
              console.log(data)
              if(!data.proUser){
                navigation.navigate("BuyKeyScreen")
              } else {
                navigation.navigate('WelcomeScreen', {});
              }
            })
          })
        })
      }else {
        alert("All fields required")
      }

    } catch (error) {
      console.log("Login Error", error.message)
    }
  }

  const saveId = async(uid) => {
    try {
      AsyncStorage.setItem("uid", uid)
    } catch (error) {
      console.log("SaveId",error.message)
    }
  }

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewfe}
        behavior="position"
        enabled={true}
        keyboardVerticalOffset={44}
      >
        <View style={styles.ViewBv}>
          <Image
            style={styles.ImageBt}
            resizeMode="contain"
            source={Images._2Copy}
          />
        </View>

        <View
          style={styles.Viewxz}
          clickable=""
        >
          <TextInput
            style={StyleSheet.flatten([
              styles.TextInputJw,
              {
                borderColor: theme.colors.divider,
                borderRadius: theme.borderRadius.global,
                color: theme.colors.strong,
                backgroundColor: theme.colors.background,
              },
            ])}
            value={emailinput}
            onChangeText={emailinput => setEmailinput(emailinput)}
            spellcheck={true}
            placeholder="Email"
            clearTextOnFocus={false}
            enablesReturnKeyAutomatically={true}
            placeholderTextColor={theme.colors.medium}
            clearButtonMode="while-editing"
            returnKeyType="next"
            textContentType="emailaddress"
          />
          <TextInput
            style={StyleSheet.flatten([
              styles.TextInputH4,
              {
                color: theme.colors.strong,
                borderColor: theme.colors.divider,
                borderRadius: theme.borderRadius.global,
                backgroundColor: theme.colors.background,
              },
            ])}
            enablesReturnKeyAutomatically={true}
            clearTextOnFocus={false}
            placeholder="Password"
            spellcheck={true}
            onChangeText={passwordinput => setPasswordinput(passwordinput)}
            value={passwordinput}
            placeholderTextColor={theme.colors.medium}
            clearButtonMode="while-editing"
            secureTextEntry={true}
            returnKeyType="done"
            textContentType="password"
            autoFocus={true}
            keyboardAppearance="dark"
          />
          <Button
            onPress={onPressTOsyYqNY}
            style={StyleSheet.flatten([
              styles.Buttonvx,
              { borderRadius: theme.borderRadius.global },
            ])}
            type="solid"
          >
            {'Log In'}
          </Button>
        </View>

        <View style={styles.View_96}>
          <Text
            style={StyleSheet.flatten([
              theme.typography.subtitle2,
              { color: theme.colors.medium },
            ])}
          >
            {"Don't have an account?"}
          </Text>

          <Button
            onPress={onPressvnPYQjT4}
            style={StyleSheet.flatten([
              styles.ButtonXb,
              { borderColor: theme.colors.custom_rgba0_0_0_0 },
            ])}
            type="outline"
            color={theme.colors.primary}
          >
            {'Register'}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageBt: {
    width: 250,
    height: 250,
    marginBottom: 46,
  },
  TextInputJw: {
    paddingRight: 14,
    paddingLeft: 14,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginTop: 12,
    marginBottom: 12,
    height: 54,
  },
  KeyboardAvoidingViewfe: {
    justifyContent: 'space-around',
    flexGrow: 1,
  },
  ViewBv: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInputH4: {
    marginBottom: 12,
    marginTop: 12,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingRight: 14,
    paddingLeft: 14,
    height: 54,
  },
  Viewxz: {
    paddingLeft: 32,
    paddingRight: 32,
    marginBottom: 24,
  },
  ButtonXb: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    alignSelf: 'center',
    alignContent: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    borderBottomWidth: 0,
  },
  Buttonvx: {
    justifyContent: 'center',
    height: 54,
    marginTop: 12,
    alignItems: 'center',
  },
  View_96: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 32,
    paddingBottom: 32,
    alignItems: 'center',
  },
});

export default withTheme(LoginWithEmailENScreen);
