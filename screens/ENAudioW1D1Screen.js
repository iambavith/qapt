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

const ENAudioW1D1Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressxA3i4sGL = item => {
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
          <Touchable onPress={onPressxA3i4sGL}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.View_3h}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.ImagenS}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.Containernv} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morning"
              subtitle="Week 1 - Day 1"
              elevation={2}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_63.wav',
              }}
            />
          </Container>

          <Container style={styles.Container_6z} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Evening"
              subtitle="Week 1 - Day 1 "
              elevation={2}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_62.wav',
              }}
            />
          </Container>

          <Container style={styles.Containerl9} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Night"
              subtitle="Week 1 - Day 1"
              elevation={2}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_61.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Containernv: {
    paddingBottom: 30,
  },
  ImagenS: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  Container_6z: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  View_3h: {
    alignItems: 'center',
  },
  Containerl9: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(ENAudioW1D1Screen);
