import React from 'react';
import Images from '../config/Images';
import {
  AudioPlayer,
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

const ENWelcomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressMKvbbxpC = item => {
    const data = item;
    navigation.navigate('WelcomeScreen', {});
  };
  const onPressmUzwZWGi = item => {
    const data = item;
    navigation.navigate('ENWeeksScreen', {});
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewgW}
        behavior="position"
        enabled={true}
        keyboardVerticalOffset={44}
      >
        <Container useThemeGutterPadding={true}>
          <Touchable onPress={onPressMKvbbxpC} style={styles.Touchablece}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View style={styles.ViewLP}>
          <Image
            style={styles.Imagegb}
            resizeMode="contain"
            source={Images._2Copy}
          />
          <Text
            style={StyleSheet.flatten([
              theme.typography.headline2,
              { color: theme.colors.strong },
            ])}
          >
            Welcome
          </Text>
        </View>

        <View style={styles.ViewUd}>
          <View style={styles.ViewRF}>
            <Icon
              style={styles.IconVM}
              color={theme.colors.strong}
              size={24}
              name="Feather/headphones"
            />
            <Text
              style={StyleSheet.flatten([
                theme.typography.subtitle1,
                { color: theme.colors.strong },
              ])}
              allowFontScaling={true}
            >
              Connect your default headphones
            </Text>
          </View>

          <View style={styles.View_3X}>
            <Icon
              style={styles.IcontT}
              name="FontAwesome/volume-up"
              size={24}
              color={theme.colors.strong}
            />
            <Text
              style={StyleSheet.flatten([
                theme.typography.subtitle1,
                { color: theme.colors.strong },
              ])}
              allowFontScaling={true}
            >
              Keep the device volume at Maximum
            </Text>
          </View>

          <View style={styles.ViewFb}>
            <Icon
              style={styles.Icon_9H}
              name="Ionicons/ios-musical-notes"
              color={theme.colors.strong}
              size={24}
            />
            <Text
              style={StyleSheet.flatten([
                theme.typography.subtitle1,
                { color: theme.colors.strong },
              ])}
              allowFontScaling={true}
            >
              Sit back, listen, breathe and relax
            </Text>
          </View>
        </View>

        <View style={styles.View_8a}>
          <AudioPlayer
            source={{
              uri:
                'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Intro-English-UPDATE.wav',
            }}
          />
          <Button
            onPress={onPressmUzwZWGi}
            style={StyleSheet.flatten([
              styles.Buttonhk,
              { borderRadius: theme.borderRadius.global },
            ])}
            type="solid"
          >
            Continue
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imagegb: {
    width: 250,
    height: 250,
    marginBottom: 46,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconVM: {
    height: 34,
    width: 34,
    marginRight: 14,
  },
  IcontT: {
    marginRight: 14,
    width: 34,
    height: 34,
  },
  Icon_9H: {
    height: 34,
    width: 34,
    marginRight: 14,
  },
  KeyboardAvoidingViewgW: {
    justifyContent: 'space-around',
    flexGrow: 1,
  },
  Touchablece: {
    alignSelf: 'flex-start',
  },
  ViewRF: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: '80%',
    marginBottom: 12,
    marginTop: 12,
  },
  Buttonhk: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
  },
  ViewLP: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  View_3X: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: '80%',
    marginBottom: 12,
    marginTop: 12,
  },
  ViewFb: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 12,
    marginTop: 12,
    maxWidth: '80%',
  },
  ViewUd: {
    width: '100%',
    paddingLeft: 32,
    paddingRight: 32,
  },
  View_8a: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 34,
    paddingBottom: 34,
    alignItems: 'center',
  },
});

export default withTheme(ENWelcomeScreen);
