import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { colors, constants } from './src/utils';
import { Home, DeckAdd, DeckDetail, DeckEditMode, DeckGame, Test } from './src/screens';

export const createRootNavigatorWithTabs = () => (
  createBottomTabNavigator({
    Home: createStackNavigator(
      {
        Home: { screen: Home },
        DeckAdd: { screen: DeckAdd },
        DeckDetail: { screen: DeckDetail },
        DeckEditMode: { screen: DeckEditMode },
        DeckGame: { screen: DeckGame },
      }, {
        navigationOptions: {
          headerStyle: {
            paddingRight: 10,
            paddingLeft: 10,
            shadowColor: colors.black,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowRadius: 2,
            shadowOpacity: 0.15,
          },
        },
      }
    ),
    Test: { screen: Test },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === constants.DECK_ADD) {
          iconName = 'playlist-add-check';
        } else if (routeName === constants.HOME) {
          iconName = 'playlist-add-check';
        } else if (routeName === 'Test') {
          iconName = 'playlist-add-check';
        }

        return <MaterialIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
      },
      activeTintColor: colors.purple,
      inactiveTintColor: colors.default,
    },
  })
);

export const createRootNavigator = () => (
  createStackNavigator({
    Home: { screen: Home },
    DeckAdd: { screen: DeckAdd },
    DeckDetail: { screen: DeckDetail },
    DeckEditMode: { screen: DeckEditMode },
    DeckGame: { screen: DeckGame },
  }, {
    navigationOptions: {
      headerStyle: {
        paddingRight: 10,
        paddingLeft: 10,
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 2,
        shadowOpacity: 0.15,
      },
    },
  })
);
