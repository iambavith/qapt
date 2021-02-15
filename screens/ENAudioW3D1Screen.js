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

const ENAudioW3D1Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressJ4a22TP5 = item => {
    const data = item;
    navigation.navigate('ENDays3Screen', {});
  };
  const onPressM2FJQSPx = item => {
    const data = item;
    navigation.navigate('ENDays1Screen', {});
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Container useThemeGutterPadding={true}>
          <Touchable onPress={onPressJ4a22TP5}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.ViewO5}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.ImageWv}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.ContainerLr} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morning"
              subtitle="Week 3 - Day 1"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_21.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerQK} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Evening"
              subtitle="Week 3 - Day 1 "
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_20.wav',
              }}
            />
          </Container>

          <Container style={styles.Containerbc} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Night"
              subtitle="Week 3 - Day 1"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_19.wav',
              }}
            />
          </Container>
        </View>

        <Container useThemeGutterPadding={true}>
          <Touchable onPress={onPressM2FJQSPx}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageWv: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  ContainerLr: {
    paddingBottom: 30,
  },
  ViewO5: {
    alignItems: 'center',
  },
  ContainerQK: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  Containerbc: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(ENAudioW3D1Screen);
