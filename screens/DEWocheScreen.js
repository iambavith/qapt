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

const DEWocheScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPress4nbcde0S = item => {
    const data = item;
    navigation.navigate('DEDays1Screen', {});
  };
  const onPress4kqaCPsf = item => {
    const data = item;
    navigation.navigate('DEWelcomeScreen', {});
  };
  const onPressBb8hC5Ve = item => {
    const data = item;
    navigation.navigate('DEDays2Screen', {});
  };
  const onPressA7UQtSRc = item => {
    const data = item;
    navigation.navigate('DEDays3Screen', {});
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
          <Touchable onPress={onPress4kqaCPsf}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="SimpleLineIcons/arrow-left"
            />
          </Touchable>
        </Container>

        <View
          style={styles.ViewG7}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Touchable onPress={onPress4nbcde0S}>
            <View
              style={StyleSheet.flatten([
                styles.ViewOg,
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
                  style={styles.ImageBackgroundHb}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.Viewxs}
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
                  Woche 1
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressBb8hC5Ve}>
            <View
              style={StyleSheet.flatten([
                styles.View_8q,
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
                  style={styles.ImageBackground_6E}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.Viewet}
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
                  Woche 2
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressA7UQtSRc}>
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
                  style={styles.ImageBackgroundw8}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.ViewNT}
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
                  Woche 3
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
  ImageBackgroundHb: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
  },
  ViewOg: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackground_6E: {
    width: '100%',
    height: 200,
  },
  View_8q: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundw8: {
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
  Viewxs: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  Viewet: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewNT: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewG7: {
    left: 2,
  },
});

export default withTheme(DEWocheScreen);
