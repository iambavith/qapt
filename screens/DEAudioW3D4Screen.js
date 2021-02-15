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

const DEAudioW3D4Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressqoiQ7Vsq = item => {
    const data = item;
    navigation.navigate('DEDays3Screen', {});
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Container useThemeGutterPadding={true}>
          <Touchable onPress={onPressqoiQ7Vsq}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.Viewrh}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.ImageAQ}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.Containerbb} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morgen"
              subtitle="Woche 3 - Tag 4"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_12.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerqW} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Abend"
              subtitle="Woche 3 - Tag 4"
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_11.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerRY} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Nacht"
              subtitle="Woche 3 - Tag 4"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_10.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageAQ: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  Containerbb: {
    paddingBottom: 30,
  },
  Viewrh: {
    alignItems: 'center',
  },
  ContainerqW: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  ContainerRY: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(DEAudioW3D4Screen);
