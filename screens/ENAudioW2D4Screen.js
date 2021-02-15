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

const ENAudioW2D4Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressIOOSLaGR = item => {
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
          <Touchable onPress={onPressIOOSLaGR}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.ViewgL}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.ImageW0}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.Containerl6} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morning"
              subtitle="Week 2 - Day 4"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_33.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerDf} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Evening"
              subtitle="Week 2 - Day 4"
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_32.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerPK} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Night"
              subtitle="Week 2 - Day 4"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_31.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageW0: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  Containerl6: {
    paddingBottom: 30,
  },
  ViewgL: {
    alignItems: 'center',
  },
  ContainerDf: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  ContainerPK: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(ENAudioW2D4Screen);
