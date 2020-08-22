import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Icon } from 'native-base';
import { Dimensions, TouchableOpacity, Image } from 'react-native';
import Ionicon from '~/components/Ionicon';

const Sidebar = ({ activeMenu, navigation }) => {
	return (
		<View
			style={{
				width: 50,
				backgroundColor: 'rgba(6,84,18,1)',
				height: Dimensions.get('screen').height,
				borderTopRightRadius: 100,
				alignItems: 'center',
			}}
		>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Home', { done: false });
				}}
				style={{
					alignItems: 'center',
				}}
			>
				<Ionicon
					name="home"
					style={{
						color:
							activeMenu === 'home'
								? 'rgba(201,245,202,1)'
								: 'lightgray',
						marginTop: 80,
						fontSize: activeMenu === 'home' ? 60 : 35,
					}}
				/>
				<Text
					style={{
						fontFamily: 'Roboto',
						fontSize: activeMenu === 'home' ? 12 : 10,
						color:
							activeMenu === 'home'
								? 'rgba(201,245,202,1)'
								: 'lightgray',
					}}
				>
					Home
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Basket');
				}}
				style={{
					alignItems: 'center',
				}}
			>
				<Icon
					name="shopping-basket"
					style={{
						color:
							activeMenu === 'basket'
								? 'rgba(201,245,202,1)'
								: 'lightgray',
						fontSize: activeMenu === 'basket' ? 40 : 20,
						marginTop: 80,
					}}
					type="FontAwesome"
				/>
				<Text
					style={{
						fontFamily: 'Roboto',
						fontSize: activeMenu === 'basket' ? 12 : 10,
						color:
							activeMenu === 'basket'
								? 'rgba(201,245,202,1)'
								: 'lightgray',
					}}
				>
					Basket
				</Text>
			</TouchableOpacity>
			<Image
				resizeMode="cover"
				source={{
					uri:
						'https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2009/10/Sept.-13-2009-006.jpg',
				}}
				style={{
					width: 35,
					height: 35,
					borderRadius: 100,
					color: 'lightgray',
					marginTop: 80,
				}}
			/>
			<Text
				style={{
					fontFamily: 'Roboto',
					fontSize: 10,
					color: 'lightgray',
				}}
			>
				Profile
			</Text>
		</View>
	);
};

export default Sidebar;
