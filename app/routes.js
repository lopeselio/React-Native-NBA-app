// import 'react-native-gesture-handler';
import React from 'react'
import { AppRegistry, Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'

import SignIn from './components/auth'
import News from './components/news/News'
import ArticleComponent from './components/news/ArticleComponent';
import Games from "./components/games/Games";
import GamesArticleComponent from "./components/games/GameArticleComponent";



const AppStack = createBottomTabNavigator({
    News: NewsStack,
    Games: GameStack
}) 

const AuthStack = createStackNavigator({
    signIn: SignIn
},{
    headerMode: 'none'
})

const NewsStack = createStackNavigator({
    News: News,
    Article: ArticleComponent
});

const GameStack = createStackNavigator({
    Games: Games,
    Article: GamesArticleComponent
});


export const RootNavigator = () => {
    return createAppContainer(createSwitchNavigator({
        App: AppStack,
        Auth: AuthStack
    },{
        initialRouteName: 'Auth'
    }))
}
