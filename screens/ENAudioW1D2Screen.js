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

const ENAudioW1D2Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressZLgYobPQ = item => {
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
          <Touchable onPress={onPressZLgYobPQ}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.Viewmy}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.Imageq6}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.Containero9} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morning"
              subtitle="Week 1 - Day 2"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_60.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerNd} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Evening"
              subtitle="Week 1 - Day 2 "
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_59.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerMX} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Night"
              subtitle="Week 1 - Day 2"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_English_100_58.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imageq6: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  Containero9: {
    paddingBottom: 30,
  },
  Viewmy: {
    alignItems: 'center',
  },
  ContainerNd: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  ContainerMX: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(ENAudioW1D2Screen);
