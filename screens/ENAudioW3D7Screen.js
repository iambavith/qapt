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

const ENAudioW3D7Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPress6Ryk7kIw = item => {
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
          <Touchable onPress={onPress6Ryk7kIw}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.ViewM4}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.Image_49}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.Container_0Z} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morning"
              subtitle="Week 3 - Day 7"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_3.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerGR} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Evening"
              subtitle="Week 3 - Day 7"
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_2.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerPt} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Night"
              subtitle="Week 3 - Day 7"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_1.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Image_49: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  Container_0Z: {
    paddingBottom: 30,
  },
  ViewM4: {
    alignItems: 'center',
  },
  ContainerGR: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  ContainerPt: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(ENAudioW3D7Screen);
