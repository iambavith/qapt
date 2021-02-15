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

const ENDays1Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressDBEz7lXA = item => {
    const data = item;
    navigation.navigate('ENAudioW1D1Screen', {});
  };
  const onPressW2kID14k = item => {
    const data = item;
    navigation.navigate('ENWeeksScreen', {});
  };
  const onPressXeO5DYPs = item => {
    const data = item;
    navigation.navigate('ENAudioW1D2Screen', {});
  };
  const onPressEfbkJjlt = item => {
    const data = item;
    navigation.navigate('ENAudioW1D3Screen', {});
  };
  const onPressMEPfswjX = item => {
    const data = item;
    navigation.navigate('ENAudioW1D4Screen', {});
  };
  const onPressCRR2MqEE = item => {
    const data = item;
    navigation.navigate('ENAudioW1D5Screen', {});
  };
  const onPressQiQSkUbz = item => {
    const data = item;
    navigation.navigate('ENAudioW1D6Screen', {});
  };
  const onPresskyjQpszM = item => {
    const data = item;
    navigation.navigate('ENAudioW1D7Screen', {});
  };

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      hasSafeArea={true}
      scrollable={true}
    >
      <ScrollView
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
        horizontal={false}
      >
        <Container useThemeGutterPadding={true} elevation={3}>
          <Touchable onPress={onPressW2kID14k}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="SimpleLineIcons/arrow-left"
            />
          </Touchable>
        </Container>

        <View
          style={styles.ViewLP}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Touchable onPress={onPressDBEz7lXA}>
            <View
              style={StyleSheet.flatten([
                styles.Viewu9,
                {
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.background,
                },
              ])}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
               
            >
              <ImageBackground
                style={styles.ImageBackgroundsJ}
                resizeMode="contain"
                source={Images.QAPTWeek1}
              />
              <View
                style={styles.ViewMK}
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
                  Day1
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressXeO5DYPs}>
            <View
              style={StyleSheet.flatten([
                styles.View_5N,
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
                  style={styles.ImageBackgroundkA}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.ViewJk}
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
                  Day 2
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressEfbkJjlt}>
            <View
              style={StyleSheet.flatten([
                styles.Viewer,
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
                  style={styles.ImageBackgroundm5}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.View_3g}
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
                  Day 3
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressMEPfswjX}>
            <View
              style={StyleSheet.flatten([
                styles.ViewFE,
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
                  style={styles.ImageBackgroundVv}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.ViewFF}
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
                  Day 4
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressCRR2MqEE}>
            <View
              style={StyleSheet.flatten([
                styles.ViewWo,
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
                  style={styles.ImageBackground_4a}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.ViewY3}
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
                  Day 5
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressQiQSkUbz}>
            <View
              style={StyleSheet.flatten([
                styles.View_3Z,
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
                  style={styles.ImageBackgroundUm}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.Viewiy}
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
                  Day 6
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPresskyjQpszM} style={styles.Touchablevo}>
            <View
              style={StyleSheet.flatten([
                styles.View_4q,
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
                  style={styles.ImageBackgroundIq}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.Viewo4}
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
                  Day 7
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
  ImageBackgroundsJ: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
  },
  Viewu9: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginBottom: 12,
    marginTop: 12,
  },
  ImageBackgroundkA: {
    width: '100%',
    height: 200,
  },
  View_5N: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundm5: {
    width: '100%',
    height: 200,
  },
  Viewer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundVv: {
    width: '100%',
    height: 200,
  },
  ViewFE: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackground_4a: {
    width: '100%',
    height: 200,
  },
  ViewWo: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundIq: {
    width: '100%',
    height: 200,
  },
  View_4q: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundUm: {
    width: '100%',
    height: 200,
  },
  View_3Z: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ViewMK: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  ViewJk: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  View_3g: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewFF: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewY3: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewLP: {
    left: 2,
    alignContent: 'center',
  },
  Viewo4: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  Viewiy: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  Touchablevo: {
    height: 150,
  },
});

export default withTheme(ENDays1Screen);
