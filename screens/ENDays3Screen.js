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

const ENDays3Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPress2GEFa98k = item => {
    const data = item;
    navigation.navigate('ENWeeksScreen', {});
  };
  const onPressEy1qboph = item => {
    const data = item;
    navigation.navigate('ENAudioW3D1Screen', {});
  };
  const onPressG7YxeuEh = item => {
    const data = item;
    navigation.navigate('ENAudioW3D2Screen', {});
  };
  const onPressaH1Ti0Jp = item => {
    const data = item;
    navigation.navigate('ENAudioW3D3Screen', {});
  };
  const onPressTbRpEoEq = item => {
    const data = item;
    navigation.navigate('ENAudioW3D4Screen', {});
  };
  const onPress7H8baXiN = item => {
    const data = item;
    navigation.navigate('DEAudioW3D5Screen', {});
  };
  const onPress9tSx0eYX = item => {
    const data = item;
    navigation.navigate('DEAudioW3D6Screen', {});
  };
  const onPressnZtUuPXv = item => {
    const data = item;
    navigation.navigate('ENAudioW3D7Screen', {});
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
          <Touchable onPress={onPress2GEFa98k}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="SimpleLineIcons/arrow-left"
            />
          </Touchable>
        </Container>

        <View
          style={styles.View_2v}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Touchable onPress={onPressEy1qboph}>
            <View
              style={StyleSheet.flatten([
                styles.Viewjh,
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
                  style={styles.ImageBackground_32}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.Viewtd}
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

          <Touchable onPress={onPressG7YxeuEh}>
            <View
              style={StyleSheet.flatten([
                styles.Viewhb,
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
                  style={styles.ImageBackgroundmR}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.Viewj1}
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

          <Touchable onPress={onPressaH1Ti0Jp}>
            <View
              style={StyleSheet.flatten([
                styles.VieweY,
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
                  style={styles.ImageBackgroundEm}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.Viewia}
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

          <Touchable onPress={onPressTbRpEoEq}>
            <View
              style={StyleSheet.flatten([
                styles.ViewYD,
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
                  style={styles.ImageBackgroundSr}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.ViewlX}
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

          <Touchable onPress={onPress7H8baXiN}>
            <View
              style={StyleSheet.flatten([
                styles.ViewSg,
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
                  style={styles.ImageBackground_6q}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.Viewap}
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

          <Touchable onPress={onPress9tSx0eYX}>
            <View
              style={StyleSheet.flatten([
                styles.ViewFW,
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
                  style={styles.ImageBackgroundjA}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.ViewZy}
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

          <Touchable onPress={onPressnZtUuPXv}>
            <View
              style={StyleSheet.flatten([
                styles.View_4n,
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
                  style={styles.ImageBackgroundhE}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.ViewBZ}
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
  ImageBackground_32: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
  },
  Viewjh: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundmR: {
    width: '100%',
    height: 200,
  },
  Viewhb: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundEm: {
    width: '100%',
    height: 200,
  },
  VieweY: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundSr: {
    width: '100%',
    height: 200,
  },
  ViewYD: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackground_6q: {
    width: '100%',
    height: 200,
  },
  ViewSg: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundjA: {
    width: '100%',
    height: 200,
  },
  ViewFW: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundhE: {
    width: '100%',
    height: 200,
  },
  View_4n: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  Viewtd: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  Viewj1: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  Viewia: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewlX: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  Viewap: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewZy: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewBZ: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  View_2v: {
    left: 2,
  },
});

export default withTheme(ENDays3Screen);
