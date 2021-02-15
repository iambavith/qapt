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

const DEAudioW1D1Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressDYfNH09J = item => {
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
          <Touchable onPress={onPressDYfNH09J}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.Viewfs}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
        >
          <Image
            style={styles.Imagevs}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
        >
          <Container style={styles.ContainerfZ} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morgen"
              subtitle="Woche 1 - Tag 1"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_63.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerSu} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Abend"
              subtitle="Woche 1 - Tag 1"
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_62.wav',
              }}
            />
          </Container>

          <Container style={styles.Containers3} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Nacht"
              subtitle="Woche 1 - Tag 1"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_61.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imagevs: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  ContainerfZ: {
    paddingBottom: 30,
  },
  Viewfs: {
    alignItems: 'center',
  },
  ContainerSu: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  Containers3: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(DEAudioW1D1Screen);
