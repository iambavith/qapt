import React from 'react';
import Images from '../config/Images';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, TextInput, View, AsyncStorage } from 'react-native';
import FirebaseApp from '../FirebaseConfig'

const RegisterWithEmailDEScreen = props => {
  const [emailinput, setEmailinput] = React.useState(null);
  const [passwordinput, setPasswordinput] = React.useState(null);
  const [username, setUsername] = React.useState(null)
  const { theme } = props;
  const { navigation } = props;

  const signUp = () => {
    try {
      const email = emailinput
      const password = passwordinput
      const displayName = username

      if(email && password && displayName!= null){
      FirebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        FirebaseApp
        .database()
        .ref('/users/' + response.user.uid)
        .set({
          email : email,
          username : displayName,
          proUser : false,
          id : response.user.uid
        })
      saveId(response.user.uid)
      })
      .then(() => {
        navigation.navigate("BuyKeyScreen")
      })
      } else {
        alert("All fields required")
      }

    } catch (error) {
      console.log(error.message)
    }
  }

  const saveId = async(uid) => {
    try {
      AsyncStorage.setItem("uid", uid)
    } catch (error) {
      console.log("SaveId",error.message)
    }
  }

  const onPressIvuTwggU = item => {
    const data = item;
    signUp()
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <View
        style={styles.ViewTr}
        accessible={true}
        importantForAccessibility="auto"
        hitSlop={{}}
         
      >
        <Image
          style={styles.ImageGM}
          source={Images._2Copy}
          resizeMode="cover"
        />
      </View>

      <View
        style={styles.ViewXR}
        clickable=""
      >
        <TextInput
          style={StyleSheet.flatten([
            styles.TextInput_9d,
            {
              borderColor: theme.colors.divider,
              borderRadius: theme.borderRadius.global,
              color: theme.colors.strong,
              backgroundColor: theme.colors.background,
            },
          ])}
          value={username}
          onChangeText={username => setUsername(username)}
          spellcheck={true}
          placeholder="Name"
          clearTextOnFocus={false}
          enablesReturnKeyAutomatically={true}
          placeholderTextColor={theme.colors.medium}
          clearButtonMode="while-editing"
          returnKeyType="next"
          textContentType="emailaddress"
        />
        <TextInput
          style={StyleSheet.flatten([
            styles.TextInput_1J,
            {
              color: theme.colors.strong,
              borderColor: theme.colors.divider,
              borderRadius: theme.borderRadius.global,
              backgroundColor: theme.colors.background,
            },
          ])}
          enablesReturnKeyAutomatically={true}
          clearTextOnFocus={false}
          placeholder="Email"
          spellcheck={true}
          onChangeText={emailinput => setEmailinput(emailinput)}
          value={emailinput}
          placeholderTextColor={theme.colors.medium}
          clearButtonMode="while-editing"
          returnKeyType="done"
          textContentType="email"
          autoFocus={true}
          keyboardAppearance="dark"
        />
        <TextInput
          style={StyleSheet.flatten([
            styles.TextInputo5,
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
          onPress={onPressIvuTwggU}
          style={StyleSheet.flatten([
            styles.ButtonFP,
            { borderRadius: theme.borderRadius.global },
          ])}
          type="solid"
        >
          {'Register'}
        </Button>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextInput_9d: {
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
  ViewTr: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 40,
  },
  ImageGM: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput_1J: {
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
  ViewXR: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  TextInputo5: {
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
  ButtonFP: {
    justifyContent: 'center',
    height: 54,
    marginTop: 12,
    alignItems: 'center',
  },
});

export default withTheme(RegisterWithEmailDEScreen);
