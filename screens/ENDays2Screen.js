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

const ENDays2Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPress24fek58v = item => {
    const data = item;
    navigation.navigate('ENAudioW2D1Screen', {});
  };
  const onPressWXy9ArbG = item => {
    const data = item;
    navigation.navigate('ENWeeksScreen', {});
  };
  const onPressjxAIAIpt = item => {
    const data = item;
    navigation.navigate('ENAudioW2D2Screen', {});
  };
  const onPressisorJcll = item => {
    const data = item;
    navigation.navigate('ENAudioW2D3Screen', {});
  };
  const onPressiLmT1lS6 = item => {
    const data = item;
    navigation.navigate('ENAudioW1D4Screen', {});
  };
  const onPressb1xYRmwc = item => {
    const data = item;
    navigation.navigate('ENAudioW1D5Screen', {});
  };
  const onPresswFpalouM = item => {
    const data = item;
    navigation.navigate('ENAudioW2D6Screen', {});
  };
  const onPress6LqH3rNG = item => {
    const data = item;
    navigation.navigate('ENAudioW2D7Screen', {});
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
      >
        <Container useThemeGutterPadding={true}>
          <Touchable onPress={onPressWXy9ArbG}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="SimpleLineIcons/arrow-left"
            />
          </Touchable>
        </Container>

        <View
          style={styles.Viewaw}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Touchable onPress={onPress24fek58v}>
            <View
              style={StyleSheet.flatten([
                styles.ViewbA,
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
                  style={styles.ImageBackgroundrt}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.Viewq5}
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
                  Day1
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressjxAIAIpt}>
            <View
              style={StyleSheet.flatten([
                styles.ViewSe,
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
                  style={styles.ImageBackgroundAx}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.ViewIU}
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
                  Day 2
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressisorJcll}>
            <View
              style={StyleSheet.flatten([
                styles.ViewyB,
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
                  style={styles.ImageBackgroundxL}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.Viewnv}
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
                  Day 3
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressiLmT1lS6}>
            <View
              style={StyleSheet.flatten([
                styles.Viewnk,
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
                  style={styles.ImageBackgroundMi}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.ViewfG}
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
                  Day 4
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressb1xYRmwc}>
            <View
              style={StyleSheet.flatten([
                styles.Viewly,
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
                  style={styles.ImageBackgroundeM}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.ViewAv}
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
                  Day 5
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPresswFpalouM}>
            <View
              style={StyleSheet.flatten([
                styles.Viewct,
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
                  style={styles.ImageBackgroundbb}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.View_8p}
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
                  Day 6
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPress6LqH3rNG}>
            <View
              style={StyleSheet.flatten([
                styles.Viewmj,
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
                  style={styles.ImageBackground_7A}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.ViewMi}
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
  ImageBackgroundrt: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
  },
  ViewbA: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundAx: {
    width: '100%',
    height: 200,
  },
  ViewSe: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundxL: {
    width: '100%',
    height: 200,
  },
  ViewyB: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundMi: {
    width: '100%',
    height: 200,
  },
  Viewnk: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundeM: {
    width: '100%',
    height: 200,
  },
  Viewly: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundbb: {
    width: '100%',
    height: 200,
  },
  Viewct: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackground_7A: {
    width: '100%',
    height: 200,
  },
  Viewmj: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  Viewq5: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewIU: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  Viewnv: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewfG: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewAv: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  View_8p: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewMi: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  Viewaw: {
    left: 2,
  },
});

export default withTheme(ENDays2Screen);
