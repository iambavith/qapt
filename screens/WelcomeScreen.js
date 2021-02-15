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
} from 'react-native';

const WelcomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressjB6WCU2A = item => {
    const data = item;
    navigation.navigate('DEWelcomeScreen', {});
  };
  const onPressTUtcbCLf = item => {
    const data = item;
    navigation.navigate('LoginWithEmailENScreen', {});
  };
  const onPressnm9B2nyD = item => {
    const data = item;
    navigation.navigate('ENWelcomeScreen', {});
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <Container useThemeGutterPadding={true}>
        <Touchable onPress={onPressTUtcbCLf} >
          <Icon
            color={theme.colors.strong}
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
          <Text
            style={StyleSheet.flatten([
              styles.TextSG,
              theme.typography.subtitle1,
              { color: theme.colors.medium },
            ])}
          >
            {'Wähle deine Sprache'}
          </Text>

          <Text
            style={StyleSheet.flatten([
              styles.Texta9,
              theme.typography.subtitle1,
              { color: theme.colors.medium },
            ])}
          >
            {'Select your Language'}
          </Text>

          <View
            style={styles.ViewvD}
            clickable=""
          >
            <Button
              onPress={onPressjB6WCU2A}
              style={StyleSheet.flatten([
                styles.ButtonWv,
                { borderRadius: theme.borderRadius.global },
              ])}
              type="solid"
            >
              {'Deutsch'}
            </Button>

            <Button
              onPress={onPressnm9B2nyD}
              style={StyleSheet.flatten([
                styles.ButtonKa,
                { borderRadius: theme.borderRadius.global },
              ])}
              type="solid"
              color={theme.colors.secondary}
            >
              {'English'}
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
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
    marginTop: 40,
    marginBottom: 60,
  },
});

export default withTheme(WelcomeScreen);
