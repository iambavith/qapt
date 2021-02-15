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

const ENAudioW3D6Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressxxC5yDHU = item => {
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
          <Touchable onPress={onPressxxC5yDHU}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.ViewXN}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.Imageax}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.Containerpw} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morning"
              subtitle="Week 3 - Day 6"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_6.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerQT} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Evening"
              subtitle="Week 3 - Day 6"
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_5.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerUO} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Night"
              subtitle="Week 3 - Day 6"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_4.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imageax: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  Containerpw: {
    paddingBottom: 30,
  },
  ViewXN: {
    alignItems: 'center',
  },
  ContainerQT: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  ContainerUO: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(ENAudioW3D6Screen);
