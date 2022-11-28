import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import Messageboard from './Messageboard';
import CactusCommunicate from '../pages/CactusCommunicate';
import Observepage from '../pages/Observepage';

const RootStack = createStackNavigator(
    {
        Messageboard:Messageboard,
        CactusCommunicate:CactusCommunicate,
        Observepage:Observepage,
    },
);

const AppContainer = createAppContainer(RootStack);

export default class Root extends React.Component{
    render(){
        return <AppContainer />;
    }
}