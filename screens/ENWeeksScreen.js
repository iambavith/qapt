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

const ENWeeksScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressiPUl4Oak = item => {
    const data = item;
    navigation.navigate('ENWelcomeScreen', {});
  };
  const onPressmxwxYRZR = item => {
    const data = item;
    navigation.navigate('ENDays1Screen', {});
  };
  const onPressHIPLXFbY = item => {
    const data = item;
    navigation.navigate('ENDays2Screen', {});
  };
  const onPressIF4MCu90 = item => {
    const data = item;
    navigation.navigate('ENDays3Screen', {});
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
          <Touchable onPress={onPressiPUl4Oak}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="SimpleLineIcons/arrow-left"
            />
          </Touchable>
        </Container>

        <View
          style={styles.Viewar}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Touchable onPress={onPressmxwxYRZR}>
            <View
              style={StyleSheet.flatten([
                styles.ViewbC,
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
                  style={styles.ImageBackgroundb9}
                  resizeMode="contain"
                  source={Images.QAPTWeek1}
                />
              </View>

              <View
                style={styles.Viewi6}
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
                  Week 1
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressHIPLXFbY}>
            <View
              style={StyleSheet.flatten([
                styles.ViewhD,
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
                  style={styles.ImageBackgroundT0}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.ViewHE}
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
                  Week 2
                </Text>
                <Touchable />
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressIF4MCu90}>
            <View
              style={StyleSheet.flatten([
                styles.ViewNn,
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
                  style={styles.ImageBackgroundQ2}
                  resizeMode="contain"
                  source={Images.QAPTThirdweek}
                />
              </View>

              <View
                style={styles.ViewCQ}
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
                  Week 3
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
  ImageBackgroundb9: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
  },
  ViewbC: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundT0: {
    width: '100%',
    height: 200,
  },
  ViewhD: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundQ2: {
    width: '100%',
    height: 200,
  },
  ViewNn: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  Viewi6: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewHE: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewCQ: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  Viewar: {
    left: 2,
  },
});

export default withTheme(ENWeeksScreen);
