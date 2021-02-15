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

const ENAudioW3D5Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressBH9D6mA6 = item => {
    const data = item;
    navigation.navigate('ENDays3Screen', {});
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Container useThemeGutterPadding={true}>
          <Touchable onPress={onPressBH9D6mA6}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.ViewWa}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.Imagewm}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.Container_3e} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morning"
              subtitle="Week 3 - Day 5"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_9.wav',
              }}
            />
          </Container>

          <Container style={styles.Container_7a} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Evening"
              subtitle="Week 3 - Day 5"
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_8.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerZh} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Night"
              subtitle="Week 3 - Day 5"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_7.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imagewm: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  Container_3e: {
    paddingBottom: 30,
  },
  ViewWa: {
    alignItems: 'center',
  },
  Container_7a: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  ContainerZh: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(ENAudioW3D5Screen);
