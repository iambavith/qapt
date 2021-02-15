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

const DEAudioW3D3Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPress43Hw9e7l = item => {
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
          <Touchable onPress={onPress43Hw9e7l}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.View_1o}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.ImagecO}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.ContainerkZ} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morgen"
              subtitle="Woche 3 - Tag 3"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_15.wav',
              }}
            />
          </Container>

          <Container style={styles.Containerel} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Abend"
              subtitle="Woche 3 - Tag 3"
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_14.wav',
              }}
            />
          </Container>

          <Container style={styles.Container_5d} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Nacht"
              subtitle="Woche 3 - Tag 3"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_13.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImagecO: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  ContainerkZ: {
    paddingBottom: 30,
  },
  View_1o: {
    alignItems: 'center',
  },
  Containerel: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  Container_5d: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(DEAudioW3D3Screen);
