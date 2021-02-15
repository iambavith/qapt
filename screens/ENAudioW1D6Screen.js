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

const ENAudioW1D6Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressHqB8UK1R = item => {
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
          <Touchable onPress={onPressHqB8UK1R}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.ViewXL}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.ImageOm}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.Container_7L} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morning"
              subtitle="Week 1 - Day 6"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_48.wav',
              }}
            />
          </Container>

          <Container style={styles.ContaineryQ} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Evening"
              subtitle="Week 1 - Day 6"
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_47.wav',
              }}
            />
          </Container>

          <Container style={styles.Containeriw} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Night"
              subtitle="Week 1 - Day 6"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_46.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageOm: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  Container_7L: {
    paddingBottom: 30,
  },
  ViewXL: {
    alignItems: 'center',
  },
  ContaineryQ: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  Containeriw: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(ENAudioW1D6Screen);
