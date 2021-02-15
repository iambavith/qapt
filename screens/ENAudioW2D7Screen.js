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

const ENAudioW2D7Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressppIaDQoj = item => {
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
          <Touchable onPress={onPressppIaDQoj}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.ViewyH}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.Image_6d}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.ContainerUU} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morning"
              subtitle="Week 2 - Day 7"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_24.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerQV} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Evening"
              subtitle="Week 2 - Day 7"
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_23.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerAJ} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Night"
              subtitle="Week 2 - Day 7"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_22.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Image_6d: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  ContainerUU: {
    paddingBottom: 30,
  },
  ViewyH: {
    alignItems: 'center',
  },
  ContainerQV: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  ContainerAJ: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(ENAudioW2D7Screen);
