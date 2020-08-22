import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Input } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';

const OfferScreen = ({ navigation }) => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'rgba(201,245,202,1)',
				alignItems: 'center',
			}}
		>
			<Text
				style={{
					color: 'rgba(20,117,22,1)',
					fontFamily: 'Roboto_medium',
					fontSize: 20,
					fontWeight: 'bold',
				}}
			>
				Froilan is selling this for P30.00
			</Text>
			<Image
				resizeMode="cover"
				source={{
					uri:
						'https://images.vexels.com/media/users/3/143188/isolated/preview/5f44f3160a09b51b4fa4634ecdff62dd-money-icon-by-vexels.png',
				}}
				style={{
					width: 204,
					height: 204,
				}}
			/>
			<Text
				style={{
					color: '#7D7D7D',
				}}
			>
				You are offering:
			</Text>
			<View
				style={{
					width: 250,
					backgroundColor: 'white',
					height: 50,
					borderRadius: 100,
					marginTop: 20,
				}}
			>
				<Input
					keyboardType="number-pad"
					placeholder="30.00"
					placeholderTextColor="#7D7D7D"
					style={{
						textAlign: 'center',
						color: 'green',
					}}
				/>
			</View>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Home', { done: true });
				}}
				style={{
					height: 50,
					width: 250,
					backgroundColor: 'rgba(20,117,22,1)',
					borderRadius: 100,
					marginTop: 30,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text
					style={{
						color: 'white',
						fontFamily: 'Roboto_medium',
						fontSize: 20,
						fontWeight: 'bold',
					}}
				>
					Make an Offer
				</Text>
			</TouchableOpacity>
		</View>
	);
};

OfferScreen.propTypes = {};

export default OfferScreen;
