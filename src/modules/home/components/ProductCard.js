import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import Ionicon from '~/components/Ionicon';

const ProductCard = ({
	openBottomSheet,
	price,
	productName,
	expDate,
	imageURL,
}) => {
	return (
		<View>
			<View
				style={{
					backgroundColor: '#FFF',
					borderRadius: 24,
					width: 146,
					height: 180,
					marginBottom: 10,
					margin: 20,
					elevation: 2,
					padding: 10,
				}}
			>
				<TouchableOpacity onPress={openBottomSheet}>
					<View
						style={{
							backgroundColor: 'rgba(6,84,18,1)',
							borderTopRightRadius: 16,
							borderBottomLeftRadius: 16,
							width: 34,
							height: 30,
							alignSelf: 'flex-end',
							justifyContent: 'center',
						}}
					>
						<Ionicon
							name="cart"
							style={{
								color: 'rgba(201,245,202,1)',
								fontSize: 18,
								alignSelf: 'center',
							}}
						/>
					</View>
				</TouchableOpacity>
				<View
					style={{
						bottom: -10,
						position: 'absolute',
						marginLeft: 15,
						paddingBottom: 20,
					}}
				>
					<Text
						style={{
							color: 'rgba(20,117,22,1)',
							fontFamily: 'Roboto_medium',
							fontSize: 18,
							fontWeight: 'bold',
						}}
					>
						{price}
					</Text>
					<Text
						style={{
							fontFamily: 'Roboto_medium',
							fontSize: 15,
							fontWeight: 'bold',
						}}
					>
						{productName}
					</Text>
					<Text
						style={{
							color: 'rgba(20,117,22,1)',
							fontFamily: 'Roboto_medium',
							fontSize: 10,
							fontWeight: 'bold',
						}}
					>
						{`Expiration: ${expDate}`}
					</Text>
				</View>
			</View>
			<View
				style={{
					left: 5,
					top: 5,
					position: 'absolute',
					elevation: 3,
					shadowOpacity: 0,
					zIndex: 2,
				}}
			>
				<Image
					resizeMode="cover"
					source={{
						uri: imageURL,
					}}
					style={{
						width: 104,
						height: 104,
						borderRadius: 100,
					}}
				/>
			</View>
		</View>
	);
};

ProductCard.propTypes = {
	openBottomSheet: PropTypes.func.isRequired,
};

export default ProductCard;
