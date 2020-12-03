import React from 'react'
import { Platform } from 'react-native'

import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'

import AuthComponent from './components/auth'
import NewsComponent from './components/news'
import GamesComponent from './components/games'
