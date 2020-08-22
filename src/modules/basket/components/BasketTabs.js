import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

const BasketTabs = ({ activeTab, handleSwitch }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
			}}
		>
			<TouchableOpacity
				onPress={() => {
					handleSwitch(0);
				}}
			>
				<View
					style={{
						backgroundColor:
							activeTab === 0 ? 'rgba(6,84,18,1)' : '#F7FFF7',
						borderTopRightRadius: 9,
						borderBottomLeftRadius: 9,
						width: 83,
						height: 30,
						marginLeft: 30,
						justifyContent: 'center',
					}}
				>
					<Text
						style={{
							fontFamily: 'Roboto',
							color:
								activeTab === 0
									? 'rgba(184,249,185,1)'
									: '#7D7D7D',
							alignSelf: 'center',
							fontSize: 16,
						}}
					>
						Offers
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					handleSwitch(1);
				}}
			>
				<View
					style={{
						backgroundColor:
							activeTab === 1 ? 'rgba(6,84,18,1)' : '#F7FFF7',
						borderTopRightRadius: 9,
						borderBottomLeftRadius: 9,
						width: 83,
						height: 30,
						marginLeft: 10,
						justifyContent: 'center',
					}}
				>
					<Text
						style={{
							fontFamily: 'Roboto',
							color:
								activeTab === 1
									? 'rgba(184,249,185,1)'
									: '#7D7D7D',
							alignSelf: 'center',
							fontSize: 16,
						}}
					>
						Orders
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					handleSwitch(2);
				}}
			>
				<View
					style={{
						backgroundColor:
							activeTab === 2 ? 'rgba(6,84,18,1)' : '#F7FFF7',
						borderTopRightRadius: 9,
						borderBottomLeftRadius: 9,
						width: 83,
						height: 30,
						marginLeft: 10,
						justifyContent: 'center',
					}}
				>
					<Text
						style={{
							fontFamily: 'Roboto',
							color:
								activeTab === 2
									? 'rgba(184,249,185,1)'
									: '#7D7D7D',
							alignSelf: 'center',
							fontSize: 16,
						}}
					>
						Done
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

BasketTabs.propTypes = { activeTab: PropTypes.number.isRequired };

export default BasketTabs;
