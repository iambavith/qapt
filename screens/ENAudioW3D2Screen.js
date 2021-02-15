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

const ENAudioW3D2Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPresscIhGxYTT = item => {
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
          <Touchable onPress={onPresscIhGxYTT}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.ViewAi}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.ImageFu}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.Container_8a} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morning"
              subtitle="Week 3 - Day 2"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_18.wav',
              }}
            />
          </Container>

          <Container style={styles.ContaineriL} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Evening"
              subtitle="Week 3 - Day 2 "
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_17.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerUT} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Night"
              subtitle="Week 3 - Day 2"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_16.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageFu: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  Container_8a: {
    paddingBottom: 30,
  },
  ViewAi: {
    alignItems: 'center',
  },
  ContaineriL: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  ContainerUT: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(ENAudioW3D2Screen);
