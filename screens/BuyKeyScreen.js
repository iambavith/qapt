import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Container,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage
} from 'react-native';
import FirebaseApp from '../FirebaseConfig'

class BuyKeyScreen extends React.Component{

  state={
    lisenceKey : '',
    keyValid : false
  }

  setKeyValid = async () => {
      await this.setState({
          keyValid : true
      })
  }

   checkKey = () => {
      try {
          const key = this.state.lisenceKey

         FirebaseApp
          .firestore()
          .collection("license")
          .where("key", "==", key)
          .get()
          .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                  const result = doc.data()
                  if(result){
                    console.log('resulyt', result)
                    this.setKeyValid()
                    .then(() => {
                    FirebaseApp
                    .firestore()
                    .collection("license")
                    .doc(doc.id)
                    .delete()
                    })
                    
                  } 
              })
          })
          .then( async() => {

            const id = await AsyncStorage.getItem("uid")
            console.log(id)
            console.log("Valid", this.state.keyValid)
              if(this.state.keyValid){
                  FirebaseApp
                  .database()
                  .ref(`/users/${id}`)
                  .on("value", (snapShot) => {
                      const data = snapShot.val()
                      console.log(data);
                      if(data){
                          FirebaseApp
                          .database()
                          .ref(`/users/${id}`)
                          .set({
                              email : data.email,
                              id : data.id,
                              proUser : true,
                              username : data.username
                          })
                          .then(() => {
                            this.props.navigation.navigate("WelcomeScreen")
                          })
                      } 
                  })
              }
              else {
                alert("Key Invalid")
              }
          })
          .catch((error) => {
              console.log("Error",error)
          })

      } catch (error) {
          console.log("Licence Error")
      }
  }
render(){
  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <Container useThemeGutterPadding={true}>
        <Touchable onPress={() => {this.props.navigation.goBack()}} >
          <Icon
            color={this.props.theme.colors.strong}
            size={24}
            name="Ionicons/ios-arrow-back"
          />
        </Touchable>
      </Container>

      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingView_9Q}
        behavior="position"
        enabled={true}
        keyboardVerticalOffset={44}
      >
        <View style={styles.ViewFs}>
          <Image
            style={styles.Imagekb}
            resizeMode="contain"
            source={Images._2Copy}
          />
          {/* <Text
            style={StyleSheet.flatten([
              styles.TextSG,
              theme.typography.subtitle1,
              { color: theme.colors.medium },
            ])}
          >
            {'Wähle deine Sprache'}
          </Text> */}

          <Text
            style={StyleSheet.flatten([
              styles.Texta9,
              this.props.theme.typography.subtitle1,
              { color: this.props.theme.colors.medium },
            ])}
          >
            {'Select your Language'}
          </Text>

          <View
        style={styles.ViewXR}
        clickable=""
      >
          <TextInput
          style={StyleSheet.flatten([
            styles.TextInput_1J,
            {
              borderColor: this.props.theme.colors.divider,
              borderRadius: this.props.theme.borderRadius.global,
              color: this.props.theme.colors.strong,
              backgroundColor: this.props.theme.colors.background,
            },
          ])}
          value={this.state.lisenceKey}
          onChangeText={lisenceKey => this.setState({lisenceKey : lisenceKey})}
          spellcheck={true}
          placeholder="Lisence Key"
          clearTextOnFocus={false}
          enablesReturnKeyAutomatically={true}
          placeholderTextColor={this.props.theme.colors.medium}
          clearButtonMode="while-editing"
          returnKeyType="next"
        />
        </View>
          <View
            style={styles.ViewvD}
            clickable=""
          >
            <Button
              onPress={() => {this.checkKey()}}
              style={StyleSheet.flatten([
                styles.ButtonWv,
                { borderRadius: this.props.theme.borderRadius.global },
              ])}
              type="solid"
            >
              {'Continue'}
            </Button>

            <Button
              style={StyleSheet.flatten([
                styles.ButtonKa,
                { borderRadius: this.props.theme.borderRadius.global },
              ])}
              type="solid"
              color={this.props.theme.colors.secondary}
            >
              {'Buy Lisence'}
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}
};

const styles = StyleSheet.create({
  Imagekb: {
    width: 300,
    height: 250,
    marginBottom: 80,
  },
  ButtonWv: {
    height: 54,
    marginTop: 12,
    alignSelf: 'center',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
  },
  ViewFs: {
    paddingLeft: 32,
    paddingRight: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  KeyboardAvoidingView_9Q: {
    justifyContent: 'center',
    flexGrow: 1,
  },
  ButtonKa: {
    height: 54,
    marginTop: 12,
    alignSelf: 'center',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextSG: {
    textAlign: 'center',
  },
  Texta9: {
    textAlign: 'center',
  },
  ViewvD: {
    paddingLeft: 32,
    paddingRight: 32,
    width: '100%',
    marginTop: 10,
    marginBottom: 60,
  },
  TextInput_1J: {
    marginBottom: 12,
    marginTop: 70,
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
    width : '100%'
  },
});

export default withTheme(BuyKeyScreen);
