import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PropTypes from 'prop-types';

import Ionicon from '../components/Ionicon';

import BottomTabNavigator from './BottomTabNavigator';

import styles from './StackNavigator.style';
import HomeScreen from '~/modules/home/screens/HomeScreen';
import OfferScreen from '~/modules/home/screens/OfferScreen';
import BasketScreen from '~/modules/basket/screens/BasketScreen';

const Stack = createStackNavigator();

export default function StackNavigator({ navigation }) {
	return (
		<Stack.Navigator
			screenOptions={{
				headerLeft: () => (
					<Ionicon
						name="menu"
						onPress={navigation.openDrawer}
						style={styles.headerLeftIcon}
					/>
				),
				headerShown: false,
			}}
		>
			<Stack.Screen component={HomeScreen} name="Home" />
			<Stack.Screen component={BasketScreen} name="Basket" />
			<Stack.Screen
				component={OfferScreen}
				name="Offer"
				options={{
					headerShown: true,
					headerLeft: () => (
						<Ionicon
							name="arrow-back"
							onPress={() => {
								navigation.navigate('Home', { done: false });
							}}
							style={styles.headerLeftIcon}
						/>
					),
					headerTitle: null,
					headerStyle: {
						backgroundColor: 'rgba(201,245,202,1)',
						elevation: 0,
					},
					headerTintColor: 'green',
				}}
			/>
		</Stack.Navigator>
	);
}

StackNavigator.propTypes = {
	navigation: PropTypes.shape({
		openDrawer: PropTypes.func,
	}).isRequired,
};
