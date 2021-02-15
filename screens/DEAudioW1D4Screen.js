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

const DEAudioW1D4Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressSB0x2bbw = item => {
    const data = item;
    navigation.navigate('DEDays1Screen', {});
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Container useThemeGutterPadding={true}>
          <Touchable onPress={onPressSB0x2bbw}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.ViewCu}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
        >
          <Image
            style={styles.ImageRb}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
        >
          <Container style={styles.ContainerfT} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morgen"
              subtitle="Woche 1 - Tag 4"
              elevation={2}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_54.wav',
              }}
            />
          </Container>

          <Container style={styles.Containerbu} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Abend"
              subtitle="Woche 1 - Tag 4"
              elevation={2}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_53.wav',
              }}
            />
          </Container>

          <Container style={styles.Container_2i} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Nacht"
              subtitle="Woche 1 - Tag 4"
              elevation={2}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_52.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageRb: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  ContainerfT: {
    paddingBottom: 30,
  },
  ViewCu: {
    alignItems: 'center',
  },
  Containerbu: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  Container_2i: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(DEAudioW1D4Screen);
