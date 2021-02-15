import React from 'react';
import Images from '../config/Images';
import {
  Container,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DEDays3Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressfX4hieCg = item => {
    const data = item;
    navigation.navigate('DEWocheScreen', {});
  };
  const onPress7EnQag2F = item => {
    const data = item;
    navigation.navigate('DEAudioW3D1Screen', {});
  };
  const onPressGB0vSURg = item => {
    const data = item;
    navigation.navigate('DEAudioW3D2Screen', {});
  };
  const onPress81YHeqfh = item => {
    const data = item;
    navigation.navigate('DEAudioW3D3Screen', {});
  };
  const onPressbdTrvOTU = item => {
    const data = item;
    navigation.navigate('DEAudioW3D4Screen', {});
  };
  const onPresstkV85ART = item => {
    const data = item;
    navigation.navigate('DEAudioW3D5Screen', {});
  };
  const onPressbTa9Fi7g = item => {
    const data = item;
    navigation.navigate('DEAudioW3D6Screen', {});
  };
  const onPressHZmpwapN = item => {
    const data = item;
    navigation.navigate('DEAudioW3D7Screen', {});
  };

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      hasSafeArea={true}
      scrollable={true}
    >
      <Container useThemeGutterPadding={true}>
        <Touchable onPress={onPressfX4hieCg}>
          <Icon
            color={theme.colors.strong}
            size={24}
            name="SimpleLineIcons/arrow-left"
          />
        </Touchable>
      </Container>

      <ScrollView
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <View
          style={styles.View_7h}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Touchable onPress={onPress7EnQag2F}>
            <View
              style={StyleSheet.flatten([
                styles.Viewb2,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.divider,
                },
              ])}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
               
            >
              <View
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                 
              >
                <ImageBackground
                  style={styles.ImageBackgroundHh}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.Viewqh}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                 
              >
                <Text
                  style={StyleSheet.flatten([
                    theme.typography.subtitle1,
                    { color: theme.colors.strong },
                  ])}
                  numberOfLines={2}
                >
                  Tag 1
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressGB0vSURg}>
            <View
              style={StyleSheet.flatten([
                styles.View_4D,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.divider,
                },
              ])}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
               
            >
              <View
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                 
              >
                <ImageBackground
                  style={styles.ImageBackgroundJA}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.ViewpL}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                 
              >
                <Text
                  style={StyleSheet.flatten([
                    theme.typography.headline6,
                    { color: theme.colors.strong },
                  ])}
                  numberOfLines={2}
                >
                  Tag 2
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPress81YHeqfh}>
            <View
              style={StyleSheet.flatten([
                styles.Viewuy,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.divider,
                },
              ])}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
               
            >
              <View
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                 
              >
                <ImageBackground
                  style={styles.ImageBackgroundpn}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.Viewcx}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                 
              >
                <Text
                  style={StyleSheet.flatten([
                    theme.typography.headline6,
                    { color: theme.colors.strong },
                  ])}
                  numberOfLines={2}
                >
                  Tag 3
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressbdTrvOTU}>
            <View
              style={StyleSheet.flatten([
                styles.ViewWb,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.divider,
                },
              ])}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
               
            >
              <View
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                 
              >
                <ImageBackground
                  style={styles.ImageBackground_42}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.ViewFU}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                 
              >
                <Text
                  style={StyleSheet.flatten([
                    theme.typography.headline6,
                    { color: theme.colors.strong },
                  ])}
                  numberOfLines={2}
                >
                  Tag 4
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPresstkV85ART}>
            <View
              style={StyleSheet.flatten([
                styles.View_4z,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.divider,
                },
              ])}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
               
            >
              <View
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                 
              >
                <ImageBackground
                  style={styles.ImageBackgroundGp}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.Viewjo}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                 
              >
                <Text
                  style={StyleSheet.flatten([
                    theme.typography.headline6,
                    { color: theme.colors.strong },
                  ])}
                  numberOfLines={2}
                >
                  Tag 5
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressbTa9Fi7g}>
            <View
              style={StyleSheet.flatten([
                styles.ViewA8,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.divider,
                },
              ])}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
               
            >
              <View
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                 
              >
                <ImageBackground
                  style={styles.ImageBackground_6u}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.VieweC}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                 
              >
                <Text
                  style={StyleSheet.flatten([
                    theme.typography.headline6,
                    { color: theme.colors.strong },
                  ])}
                  numberOfLines={2}
                >
                  Tag 6
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressHZmpwapN}>
            <View
              style={StyleSheet.flatten([
                styles.ViewFf,
                {
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.divider,
                },
              ])}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
               
            >
              <View
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                 
              >
                <ImageBackground
                  style={styles.ImageBackground_0b}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.View_7c}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                 
              >
                <Text
                  style={StyleSheet.flatten([
                    theme.typography.headline6,
                    { color: theme.colors.strong },
                  ])}
                  numberOfLines={2}
                >
                  Tag 7
                </Text>
              </View>
            </View>
          </Touchable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageBackgroundHh: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
  },
  Viewb2: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundJA: {
    width: '100%',
    height: 200,
  },
  View_4D: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundpn: {
    width: '100%',
    height: 200,
  },
  Viewuy: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackground_42: {
    width: '100%',
    height: 200,
  },
  ViewWb: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundGp: {
    width: '100%',
    height: 200,
  },
  View_4z: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackground_6u: {
    width: '100%',
    height: 200,
  },
  ViewA8: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackground_0b: {
    width: '100%',
    height: 200,
  },
  ViewFf: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  View_7h: {
    left: 2,
  },
  Viewqh: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewpL: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  Viewcx: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewFU: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  Viewjo: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  VieweC: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  View_7c: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
});

export default withTheme(DEDays3Screen);
