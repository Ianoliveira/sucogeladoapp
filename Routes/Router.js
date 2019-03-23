import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import normalize from '../app/utils/normalizeFont';

//ALterar para a rota das pages
import HomeScreen from '../app/components/template/Home/Home';
import LoginScreen from '../app/components/template/Login/Login';

/* any other route you want to render without the tab bar and Header bar */
const Stack = createStackNavigator({
	Login: { screen: LoginScreen }
}, {
		defaultNavigationOptions: {
			header: null
		}
	}
);

// any screen that you wnat to render in top tab bar
const TopBarNavigation = createMaterialTopTabNavigator({
	Sucos: { screen: HomeScreen },
	Vitaminas: { screen: LoginScreen },
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
const HomeStack = createStackNavigator({
	Home: { screen: TopBarNavigation },
},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'Suco Gelado',
			headerRight: <Icon name='bell' size={25} color={'#D3D8E0'} style={{ marginRight: 15 }} />,
			headerLeft: <React.Fragment />,
			headerStyle: {
				backgroundColor: '#fff',
				elevation: 0,       //remove shadow on Android
				shadowOpacity: 0,   //remove shadow on iOS
			},
			headerTintColor: '#A4A4A4',
			headerTitleStyle: {
				fontSize: 14,
				textAlign: "center",
				flex: 1
			},
		}
	});

//If you want to render more screens on bottom tab just add them here
const TabNavigator = createBottomTabNavigator({
	Home: HomeStack,
	Cart: { screen: LoginScreen },
	Profile: { screen: HomeScreen },
}, {
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				let color;
				if (routeName === 'Home') {
					iconName = 'home';
					color = focused ? '#A7BBDB' : '#D3D8E0';
				}
				if (routeName === 'Cart') {
					iconName = 'shopping-cart';
					color = focused ? '#A7BBDB' : '#D3D8E0';
				}
				if (routeName === 'Profile') {
					iconName = 'user';
					color = focused ? '#A7BBDB' : '#D3D8E0';
				}

				return (<Icon name={iconName} size={25} color={color} />)
			}
		}),
		tabBarOptions: {
			showLabel: false,
			style: {
				elevation: 0,
				shadowOpacity: 0
			}
		}
	})

const AppNavigator = createSwitchNavigator({
	Home: TabNavigator,
	Auth: Stack,
})

export default createAppContainer(AppNavigator);