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

const ENAudioW1D7Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressTm34aaJX = item => {
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
          <Touchable onPress={onPressTm34aaJX}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.ViewRV}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.ImageMj}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.ContainerWC} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morning"
              subtitle="Week 1 - Day 7"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_45.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerHY} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Evening"
              subtitle="Week 1 - Day 7"
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_44.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerW2} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Night"
              subtitle="Week 1 - Day 7"
              elevation={3}
              mode="left"
              image={Images.Night}
              aspectRatio="1"
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_43.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageMj: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  ContainerWC: {
    paddingBottom: 30,
  },
  ViewRV: {
    alignItems: 'center',
  },
  ContainerHY: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  ContainerW2: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(ENAudioW1D7Screen);
