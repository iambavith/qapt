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

const ENAudioW2D3Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPress3TasXCaZ = item => {
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
          <Touchable onPress={onPress3TasXCaZ}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.Viewzw}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.ImageF8}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.ContainereO} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morning"
              subtitle="Week 2 - Day 3"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_36.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerS2} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Evening"
              subtitle="Week 2 - Day 3"
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_35.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerZZ} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Night"
              subtitle="Week 2 - Day 3"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_34.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageF8: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  ContainereO: {
    paddingBottom: 30,
  },
  Viewzw: {
    alignItems: 'center',
  },
  ContainerS2: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  ContainerZZ: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(ENAudioW2D3Screen);
