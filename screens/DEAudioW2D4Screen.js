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

const DEAudioW2D4Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressyqK2PM8Q = item => {
    const data = item;
    navigation.navigate('DEDays2Screen', {});
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Container useThemeGutterPadding={true}>
          <Touchable onPress={onPressyqK2PM8Q}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="Ionicons/ios-arrow-back"
            />
          </Touchable>
        </Container>

        <View
          style={styles.Viewm9}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Image
            style={styles.Imageap}
            resizeMode="cover"
            source={Images.Screenshot20210118At103737PM}
          />
        </View>

        <View
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Container style={styles.Containeraj} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Morgen"
              subtitle="Woche 2 - Tag 4"
              elevation={3}
              mode="left"
              image={Images.Morning}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_33.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerVp} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Abend"
              subtitle="Woche 2 - Tag 4"
              elevation={3}
              mode="left"
              image={Images.Evening}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_32.wav',
              }}
            />
          </Container>

          <Container style={styles.ContainerAT} useThemeGutterPadding={true}>
            <CardContainerShortImage
              title="Nacht"
              subtitle="Woche 2 - Tag 4"
              elevation={3}
              mode="left"
              image={Images.Night}
            />
            <AudioPlayer
              source={{
                uri:
                  'https://qapt.beta.96hz.ch/wp-content/uploads/2021/01/Qapt_German_100_31.wav',
              }}
            />
          </Container>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imageap: {
    width: 350,
    height: 300,
    alignContent: 'center',
    alignItems: 'center',
  },
  Containeraj: {
    paddingBottom: 30,
  },
  Viewm9: {
    alignItems: 'center',
  },
  ContainerVp: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  ContainerAT: {
    paddingTop: 30,
    paddingBottom: 30,
  },
});

export default withTheme(DEAudioW2D4Screen);
