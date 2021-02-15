import React from 'react';
import Images from '../config/Images';
import {
  AudioPlayer,
  Button,
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

const DEWelcomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPress57L2nJg9 = item => {
    const data = item;
    navigation.navigate('WelcomeScreen', {});
  };
  const onPress5FKs5yTM = item => {
    const data = item;
    navigation.navigate('DEWocheScreen', {});
  };

  return (
    <ScreenContainer
      style={{ borderColor: theme.colors.secondary }}
      hasSafeArea={true}
      scrollable={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewGU}
        behavior="position"
        enabled={true}
        keyboardVerticalOffset={44}
      >
        <Touchable onPress={onPress57L2nJg9}>
          <Icon
            color={theme.colors.strong}
            size={24}
            name="Ionicons/ios-arrow-back"
          />
        </Touchable>

        <View style={styles.ViewqV}>
          <Image
            style={styles.ImageyH}
            resizeMode="contain"
            source={Images._2Copy}
          />
          <Text
            style={StyleSheet.flatten([
              theme.typography.headline3,
              {
                color: theme.colors.strong,
                textDecorationColor: theme.colors.background,
              },
            ])}
          >
            {'Willkommen'}
          </Text>
        </View>

        <View style={styles.ViewAT}>
          <View style={styles.View_78}>
            <Icon
              style={styles.Icon_6Y}
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
              {'Schließen Sie Ihre Standart-Kopfhörer an'}
            </Text>
          </View>

          <View style={styles.Viewan}>
            <Icon
              style={styles.IconWi}
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
              {'Halten Sie die Lautstärke des Geräts auf Maximum'}
            </Text>
          </View>

          <View style={styles.ViewlH}>
            <Icon
              style={styles.IconLL}
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
              {'Lehnen Sie sich zurück, hören Sie zu und entspannen Sie sich'}
            </Text>
          </View>
        </View>

        <View style={styles.View_8I}>
          <AudioPlayer
            source={{
              uri:
                'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Intro-German-UPDATE.wav',
            }}
          />
          <Button
            onPress={onPress5FKs5yTM}
            style={StyleSheet.flatten([
              styles.Button_3R,
              {
                borderRadius: theme.borderRadius.global,
                borderColor: theme.colors.primary,
              },
            ])}
            type="solid"
          >
            {'Fortsetzen'}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageyH: {
    width: 200,
    height: 200,
    marginBottom: 46,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icon_6Y: {
    height: 34,
    width: 34,
    marginRight: 14,
  },
  IconWi: {
    marginRight: 14,
    width: 34,
    height: 34,
  },
  IconLL: {
    height: 34,
    width: 34,
    marginRight: 14,
  },
  KeyboardAvoidingViewGU: {
    justifyContent: 'space-around',
    flexGrow: 1,
  },
  View_78: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: '80%',
    marginBottom: 12,
    marginTop: 12,
  },
  Button_3R: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 54,
  },
  ViewqV: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Viewan: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxWidth: '80%',
    marginBottom: 12,
    marginTop: 12,
  },
  ViewlH: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 12,
    marginTop: 12,
    maxWidth: '80%',
  },
  ViewAT: {
    width: '100%',
    paddingLeft: 32,
    paddingRight: 32,
  },
  View_8I: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 34,
    paddingBottom: 34,
    alignItems: 'center',
  },
});

export default withTheme(DEWelcomeScreen);
