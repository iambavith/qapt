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

const DEDays1Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPresseQHo4rrn = item => {
    const data = item;
    navigation.navigate('DEWocheScreen', {});
  };
  const onPressbyJOqFDP = item => {
    const data = item;
    navigation.navigate('DEAudioW1D1Screen', {});
  };
  const onPress3rH17TAT = item => {
    const data = item;
    navigation.navigate('DEAudioW1D2Screen', {});
  };
  const onPressNjb2Ot50 = item => {
    const data = item;
    navigation.navigate('DEAudioW1D3Screen', {});
  };
  const onPress3XU46h1P = item => {
    const data = item;
    navigation.navigate('ENAudioW1D4Screen', {});
  };
  const onPressv0ywl8Np = item => {
    const data = item;
    navigation.navigate('DEAudioW1D5Screen', {});
  };
  const onPressCalxqL0Y = item => {
    const data = item;
    navigation.navigate('DEAudioW1D6Screen', {});
  };
  const onPressBxaQ6jwf = item => {
    const data = item;
    navigation.navigate('DEAudioW1D7Screen', {});
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
          <Touchable onPress={onPresseQHo4rrn}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="SimpleLineIcons/arrow-left"
            />
          </Touchable>
        </Container>

        <View
          style={styles.VieweL}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Touchable onPress={onPressbyJOqFDP}>
            <View
              style={StyleSheet.flatten([
                styles.View_33,
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
                  style={styles.ImageBackgroundbY}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.View_6C}
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
                  Tag 1
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPress3rH17TAT}>
            <View
              style={StyleSheet.flatten([
                styles.Viewko,
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
                  style={styles.ImageBackgroundX8}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.Viewpx}
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

          <Touchable onPress={onPressNjb2Ot50}>
            <View
              style={StyleSheet.flatten([
                styles.ViewyM,
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
                  style={styles.ImageBackgroundUH}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.ViewcB}
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

          <Touchable onPress={onPress3XU46h1P}>
            <View
              style={StyleSheet.flatten([
                styles.Viewcj,
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
                  style={styles.ImageBackground_5c}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.Viewae}
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

          <Touchable onPress={onPressv0ywl8Np}>
            <View
              style={StyleSheet.flatten([
                styles.Viewr9,
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
                  style={styles.ImageBackgroundwU}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.ViewSw}
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

          <Touchable onPress={onPressCalxqL0Y}>
            <View
              style={StyleSheet.flatten([
                styles.ViewZx,
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
                  style={styles.ImageBackgroundLu}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.ViewAc}
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

          <Touchable onPress={onPressBxaQ6jwf}>
            <View
              style={StyleSheet.flatten([
                styles.ViewX6,
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
                  style={styles.ImageBackground_5b}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.ViewrU}
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
  ImageBackgroundbY: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
  },
  View_33: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundX8: {
    width: '100%',
    height: 200,
  },
  Viewko: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundUH: {
    width: '100%',
    height: 200,
  },
  ViewyM: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackground_5c: {
    width: '100%',
    height: 200,
  },
  Viewcj: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundwU: {
    width: '100%',
    height: 200,
  },
  Viewr9: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundLu: {
    width: '100%',
    height: 200,
  },
  ViewZx: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackground_5b: {
    width: '100%',
    height: 200,
  },
  ViewX6: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  View_6C: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  Viewpx: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewcB: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  Viewae: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewSw: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewAc: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewrU: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  VieweL: {
    left: 2,
  },
});

export default withTheme(DEDays1Screen);
