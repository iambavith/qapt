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

const DEDays2Screen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressiA0aLiZd = item => {
    const data = item;
    navigation.navigate('DEWocheScreen', {});
  };
  const onPressN3dIsNPK = item => {
    const data = item;
    navigation.navigate('DEAudioW2D1Screen', {});
  };
  const onPressKmf9QFiX = item => {
    const data = item;
    navigation.navigate('DEAudioW2D2Screen', {});
  };
  const onPressTukOWUJM = item => {
    const data = item;
    navigation.navigate('DEAudioW2D3Screen', {});
  };
  const onPressnsdmH1QP = item => {
    const data = item;
    navigation.navigate('DEAudioW2D4Screen', {});
  };
  const onPress9jbhCdWa = item => {
    const data = item;
    navigation.navigate('DEAudioW2D5Screen', {});
  };
  const onPress0Hcb5Tau = item => {
    const data = item;
    navigation.navigate('DEAudioW2D6Screen', {});
  };
  const onPressrjjd8uuG = item => {
    const data = item;
    navigation.navigate('DEAudioW2D7Screen', {});
  };

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      hasSafeArea={true}
      scrollable={true}
    >
      <Container useThemeGutterPadding={true}>
        <Touchable onPress={onPressiA0aLiZd}>
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
          style={styles.Viewxx}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
           
        >
          <Touchable onPress={onPressN3dIsNPK}>
            <View
              style={StyleSheet.flatten([
                styles.Viewla,
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
                  style={styles.ImageBackgroundzp}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.ViewL5}
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

          <Touchable onPress={onPressKmf9QFiX}>
            <View
              style={StyleSheet.flatten([
                styles.Viewz2,
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
                  style={styles.ImageBackground_4C}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.ViewCc}
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
                  Tag 2
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressTukOWUJM}>
            <View
              style={StyleSheet.flatten([
                styles.Viewn4,
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
                  style={styles.ImageBackgroundpk}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.View_8w}
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
                  Tag 3
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressnsdmH1QP}>
            <View
              style={StyleSheet.flatten([
                styles.View_28,
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
                  style={styles.ImageBackgroundGq}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.View_7C}
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
                  Tag 4
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPress9jbhCdWa}>
            <View
              style={StyleSheet.flatten([
                styles.ViewV6,
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
                  style={styles.ImageBackgroundUt}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.ViewtG}
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
                  Tag 5
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPress0Hcb5Tau}>
            <View
              style={StyleSheet.flatten([
                styles.Viewpa,
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
                  style={styles.ImageBackgroundmp}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.View_4e}
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
                  Tag 6
                </Text>
              </View>
            </View>
          </Touchable>

          <Touchable onPress={onPressrjjd8uuG}>
            <View
              style={StyleSheet.flatten([
                styles.ViewX4,
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
                  style={styles.ImageBackgroundXO}
                  resizeMode="contain"
                  source={Images.QAPTSecondweek}
                />
              </View>

              <View
                style={styles.Viewil}
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
  ImageBackgroundzp: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
  },
  Viewla: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackground_4C: {
    width: '100%',
    height: 200,
  },
  Viewz2: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundpk: {
    width: '100%',
    height: 200,
  },
  Viewn4: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundGq: {
    width: '100%',
    height: 200,
  },
  View_28: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundUt: {
    width: '100%',
    height: 200,
  },
  ViewV6: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundmp: {
    width: '100%',
    height: 200,
  },
  Viewpa: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ImageBackgroundXO: {
    width: '100%',
    height: 200,
  },
  ViewX4: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    borderLeftWidth: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  Viewxx: {
    left: 2,
  },
  ViewL5: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewCc: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  View_8w: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  View_7C: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  ViewtG: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  View_4e: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
  Viewil: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
});

export default withTheme(DEDays2Screen);
