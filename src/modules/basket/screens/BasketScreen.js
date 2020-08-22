import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'native-base';
import Sidebar from '~/modules/home/components/Sidebar';
import BasketTabs from '../components/BasketTabs';
import { ScrollView } from 'react-native';

const BasketScreen = ({ navigation }) => {
	const [activeTab, setActiveTab] = useState(0);

	const handleSwitch = (tab) => {
		setActiveTab(tab);
	};

	return (
		<>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					backgroundColor: '#F5FFF5',
				}}
			>
				<Sidebar activeMenu="basket" navigation={navigation} />
				<ScrollView>
					<Text
						style={{
							marginLeft: 10,
							padding: 20,
							fontSize: 20,
							fontFamily: 'Roboto_medium',
						}}
					>
						Offer Basket
					</Text>
					<BasketTabs
						activeTab={activeTab}
						handleSwitch={handleSwitch}
					/>
					{activeTab === 0 && (
						<>
							<View
								style={{
									backgroundColor: '#FFF',
									borderRadius: 24,
									width: '100%',
									height: 100,
									marginBottom: 10,
									margin: 20,
									elevation: 2,
									padding: 10,
								}}
							/>
						</>
					)}
				</ScrollView>
			</View>
		</>
	);
};

BasketScreen.propTypes = {};

export default BasketScreen;
