import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import normalize from '../app/utils/normalizeFont';

//ALterar para a rota das pages
import HomeScreen from '../app/components/template/Home/Home';
import LoginScreen from '../app/components/template/Login/Login';

/* any other route you want to render above the tab bar */
const Stack = createStackNavigator({
	Login: { screen: LoginScreen }
}, {
		defaultNavigationOptions: {
			header: null
		}
	}
);

const TopBarNavigation = createMaterialTopTabNavigator({
	Sucos: { screen: HomeScreen },
	Vitaminas: { screen: HomeScreen },
	Smoothies: { screen: HomeScreen },
}, {
		tabBarOptions: {
			activeTintColor: '#676767',
			inactiveTintColor: '#D0D0D0',
			indicatorStyle: {
				backgroundColor: 'transparent',
			},
			labelStyle: {
				fontSize: normalize(12),
			},
			style: {
				backgroundColor: 'transparent'
			}
		}
	}
);

/* any other route you want to render under the tab bar */
const Navigator = createStackNavigator({
	Home: { screen: TopBarNavigation },
},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#fff',
				elevation: 0,       //remove shadow on Android
				shadowOpacity: 0,   //remove shadow on iOS
			},
			title: 'Suco Gelado',
			headerTintColor: '#A4A4A4',
			headerTitleStyle: {
				fontSize: 14,
				textAlign: "center",
				flex: 1
			},
		}
	});



const TabNavigator = createBottomTabNavigator({
	Home: Navigator,
})

const AppNavigator = createSwitchNavigator({
	Home: TabNavigator,
	Auth: Stack,
})

export default createAppContainer(AppNavigator);