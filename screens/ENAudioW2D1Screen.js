import React from 'react';
import Images from '../config/Images';
import {
  AudioPlayer,
  CardContainerShortImage,
  Container,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const ENAudioW2D1Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressJ8cmemWU = item => {
    const data = item;
    navigation.navigate('ENDays2Screen', {});
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Container useThemeGutterPadding={true}>
          <Touchable onPress={onPressJ8cmemWU}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={StyleSheet.flatten([
            styles.Viewya,
            { borderColor: theme.colors.strong },
          ])}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.ImagegC}
            resizeMode="center"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container
            style={StyleSheet.flatten([
              styles.Container_3n,
              { backgroundColor: theme.colors.background },
            ])}
            useThemeGutterPadding={true}
          >
            <CardContainerShortImage
              title="Morning"
              subtitle="Week 2 - Day 1"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_42.wav',
              }}
            />
          </Container>

          <Container
            style={StyleSheet.flatten([
              styles.Containerka,
              { backgroundColor: theme.colors.background },
            ])}
            useThemeGutterPadding={true}
          >
            <CardContainerShortImage
              title="Evening"
              subtitle="Week 2 - Day 1 "
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_41.wav',
              }}
            />
          </Container>

          <Container
            style={StyleSheet.flatten([
              styles.Container_4L,
              { backgroundColor: theme.colors.background },
            ])}
            useThemeGutterPadding={true}
          >
            <CardContainerShortImage
              style={styles.CardContainerShortImagePx}
              title="Night"
              subtitle="Week 2 - Day 1"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_40.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImagegC: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  Container_3n: {
    paddingBottom: 30,
    paddingTop: 20,
  },
  CardContainerShortImagePx: {
    opacity: 1,
  },
  Viewya: {
    alignItems: 'center',
  },
  Containerka: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  Container_4L: {
    paddingTop: 30,
    paddingBottom: 30,
    opacity: 1,
  },
});

export default withTheme(ENAudioW2D1Screen);
