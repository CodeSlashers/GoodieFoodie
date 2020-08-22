import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, Icon, Button } from 'native-base';
import { Dimensions, ScrollView, Image, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Sidebar from '../components/Sidebar';
import Tabs from '../components/Tabs';
import Ionicon from '~/components/Ionicon';
import ProductCard from '../components/ProductCard';
import StoreCard from '../components/StoreCard';
import _ from 'lodash';
import { show, showAlert } from '~/modules/notification/notification.library';

const HomeScreen = ({ navigation, route }) => {
	const [activeTab, setActiveTab] = useState(0);
	const [activeIndex, setActiveIndex] = useState(2);
	const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(null);
	const sheetRef = useRef(null);
	const carouselRef = useRef(null);

	const carouselItems = [
		{
			title: 'Item21',
			text: 'Text 1',
			image:
				'https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2009/10/Sept.-13-2009-006.jpg',
		},
		{
			title: 'Item 2',
			text: 'Text 2',
			image:
				'https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2009/10/Sept.-13-2009-006.jpg',
		},
		{
			title: 'Item 3',
			text: 'Text 3',
			image:
				'https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2009/10/Sept.-13-2009-006.jpg',
		},
	];

	const nearYou = [
		{
			price: 'P30.00',
			productName: 'Tasty Bread (Bread)',
			expDate: '08/29/2020',
			imageURL:
				'https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2009/10/Sept.-13-2009-006.jpg',
		},
		{
			price: 'P20.00',
			productName: 'Strawberry Jam (Snack)',
			expDate: '08/29/2020',
			imageURL:
				'https://cdn.apartmenttherapy.info/image/upload/v1559207407/k/archive/71fe449b3b781e3d08147a8c8742f872529b72eb.jpg',
		},
		{
			price: 'P15.00',
			productName: 'Bundle (Vegetable)',
			expDate: '08/29/2020',
			imageURL:
				'https://images-na.ssl-images-amazon.com/images/I/71XPZqv5xyL._SL1024_.jpg',
		},
	];

	useEffect(() => {
		const unsub = navigation.addListener('focus', () => {
			if (_.get(route, 'params.done', false)) {
				showAlert(
					'Your offer can be viewed in Pending Offers Section.',
					'Offered Successfully',
				);
			}
			setIsBottomSheetOpen(false);
			sheetRef.current.snapTo(2);
		});

		return unsub;
	}, [route]);

	useEffect(() => {
		setIsBottomSheetOpen(false);

		sheetRef.current.snapTo(2);
	}, []);

	const handleSwitch = (tab) => {
		setActiveTab(tab);
	};

	const openBottomSheet = () => sheetRef.current.snapTo(0);

	const renderItem = ({ index, item }) => {
		return (
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Image
					resizeMode="cover"
					source={{
						uri:
							'https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2009/10/Sept.-13-2009-006.jpg',
					}}
					style={{
						width: 250,
						height: 200,
						borderRadius: 20,
					}}
				/>
			</View>
		);
	};

	const renderContent = () => (
		<View
			style={{
				backgroundColor: 'rgba(201,245,202,1)',
				height: 550,
			}}
		>
			<View
				style={{
					backgroundColor: 'white',
					height: 450,
					borderBottomLeftRadius: 30,
					borderBottomRightRadius: 30,
					padding: 10,
				}}
			>
				<View
					style={{
						flexDirection: 'row-reverse',
					}}
				>
					<View style={{ flexDirection: 'column' }}>
						<TouchableOpacity onPress={openBottomSheet}>
							<View
								style={{
									backgroundColor: 'rgba(201,245,202,1)',
									borderTopRightRadius: 16,
									borderBottomLeftRadius: 16,
									width: 44,
									height: 40,
									alignSelf: 'flex-end',
									justifyContent: 'center',
								}}
							>
								<Icon
									name="user"
									style={{
										color: 'rgba(6,84,18,1)',
										fontSize: 18,
										alignSelf: 'center',
									}}
									type="FontAwesome"
								/>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={openBottomSheet}>
							<View
								style={{
									backgroundColor: 'rgba(201,245,202,1)',
									borderTopRightRadius: 16,
									borderBottomLeftRadius: 16,
									width: 44,
									height: 40,
									alignSelf: 'flex-end',
									justifyContent: 'center',
									marginTop: 10,
								}}
							>
								<Icon
									name="location-arrow"
									style={{
										color: 'rgba(6,84,18,1)',
										fontSize: 18,
										alignSelf: 'center',
									}}
									type="FontAwesome"
								/>
							</View>
						</TouchableOpacity>
					</View>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							height: 270,
						}}
					>
						<Carousel
							ref={carouselRef}
							data={carouselItems}
							itemWidth={300}
							layout="default"
							onSnapToItem={(index) => setActiveIndex(index)}
							renderItem={renderItem}
							sliderHeight={hp('80%')}
							sliderWidth={300}
						/>
						<Pagination
							activeDotIndex={activeIndex}
							dotsLength={carouselItems.length}
							dotStyle={{
								width: 10,
								height: 10,
								borderRadius: 5,
								backgroundColor: 'rgba(6,84,18,1)',
							}}
							inactiveDotOpacity={0.4}
							inactiveDotScale={0.6}
							inactiveDotStyle={
								{
									// Define styles for inactive dots here
								}
							}
						/>
					</View>
				</View>
				<View
					style={{
						marginLeft: 20,
					}}
				>
					<Text
						style={{
							fontFamily: 'Roboto',
							fontSize: 15,
							color: '#7D7D7D',
						}}
					>
						Starts from
					</Text>
					<Text
						style={{
							color: 'rgba(20,117,22,1)',
							fontFamily: 'Roboto_medium',
							fontSize: 30,
							fontWeight: 'bold',
						}}
					>
						₱30.00
					</Text>
					<Text
						style={{
							fontFamily: 'Roboto_medium',
							fontSize: 20,
						}}
					>
						Tasty Bread (Bread/Starches)
					</Text>
					<Text
						style={{
							fontFamily: 'Roboto',
							fontSize: 15,
							color: '#7D7D7D',
						}}
					>
						Okay pa naman, wala pang bawas.
					</Text>
					<Text
						style={{
							fontFamily: 'Roboto',
							fontSize: 15,
							color: '#7D7D7D',
						}}
					>
						08/12/2020{' '}
						<Text
							style={{
								fontFamily: 'Roboto',
								fontSize: 15,
								color: 'rgba(20,117,22,1)',
							}}
						>
							(in 5 days)
						</Text>
					</Text>
					<Text
						style={{
							fontFamily: 'Roboto',
							fontSize: 15,
							color: '#7D7D7D',
						}}
					>
						<Text
							style={{
								fontFamily: 'Roboto',
								fontSize: 15,
								color: 'rgba(20,117,22,1)',
							}}
						>
							{'1 kg '}
						</Text>
						per quantity
					</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
						flex: 2,
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							flex: 1,
						}}
					>
						<View
							style={{
								height: 50,
								width: 50,
								backgroundColor: 'white',
								borderRadius: 100,
								marginTop: 30,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Icon
								name="minus"
								style={{
									color: 'rgba(20,117,22,1)',
								}}
								type="FontAwesome"
							/>
						</View>
						<View
							style={{
								height: 50,
								width: 50,
								marginTop: 30,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Text
								style={{
									fontFamily: 'Roboto',
									fontSize: 30,
									color: 'rgba(20,117,22,1)',
								}}
							>
								1
							</Text>
						</View>
						<View
							style={{
								height: 50,
								width: 50,
								backgroundColor: 'white',
								borderRadius: 100,
								marginTop: 30,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Icon
								name="plus"
								style={{
									color: 'rgba(20,117,22,1)',
								}}
								type="FontAwesome"
							/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
							alignItems: 'flex-end',
						}}
					>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate('Offer');
							}}
							style={{
								height: 50,
								width: 180,
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
								Make Offer
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);

	const renderHeader = () => (
		<View
			style={{
				backgroundColor: 'white',
				padding: 16,
				height: 10,
				borderTopLeftRadius: 40,
				borderTopRightRadius: 40,
			}}
		>
			<View
				style={{
					height: 5,
					borderRadius: 10,
					alignSelf: 'center',
					backgroundColor: 'rgba(6,84,18,1)',
					width: 30,
				}}
			/>
		</View>
	);

	return (
		<>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					backgroundColor: '#F5FFF5',
				}}
			>
				<Sidebar activeMenu="home" navigation={navigation} />
				<ScrollView>
					<Text
						style={{
							marginLeft: 10,
							padding: 20,
							fontSize: 20,
							fontFamily: 'Roboto_medium',
						}}
					>
						{activeTab === 0 ? 'Buy Goodies' : 'Sell Goodies'}
					</Text>
					<Tabs activeTab={activeTab} handleSwitch={handleSwitch} />
					{activeTab === 0 && (
						<>
							<View
								style={{
									flex: 2,
									flexDirection: 'row',
								}}
							>
								<Text
									style={{
										marginLeft: 10,
										padding: 20,
										fontSize: 15,
										fontFamily: 'Roboto',
										flex: 1,
									}}
								>
									Near you
								</Text>
								<TouchableOpacity>
									<Text
										style={{
											marginLeft: 10,
											padding: 20,
											fontSize: 15,
											fontFamily: 'Roboto',
											flex: 1,
											textAlign: 'right',
											fontWeight: 'bold',
											color: 'rgba(6,84,18,1)',
										}}
									>
										View All
									</Text>
								</TouchableOpacity>
							</View>
							<ScrollView
								horizontal
								showsHorizontalScrollIndicator={false}
							>
								{nearYou.map(
									({
										expDate,
										imageURL,
										price,
										productName,
									}) => (
										<ProductCard
											key={productName}
											expDate={expDate}
											imageURL={imageURL}
											openBottomSheet={openBottomSheet}
											price={price}
											productName={productName}
										/>
									),
								)}
							</ScrollView>
							<View
								style={{
									flex: 2,
									flexDirection: 'row',
								}}
							>
								<Text
									style={{
										marginLeft: 10,
										padding: 20,
										fontSize: 15,
										fontFamily: 'Roboto',
										flex: 1,
									}}
								>
									Stores
								</Text>
								<TouchableOpacity>
									<Text
										style={{
											marginLeft: 10,
											padding: 20,
											fontSize: 15,
											fontFamily: 'Roboto',
											flex: 1,
											textAlign: 'right',
											fontWeight: 'bold',
											color: 'rgba(6,84,18,1)',
										}}
									>
										View All
									</Text>
								</TouchableOpacity>
							</View>
							<ScrollView
								horizontal
								showsHorizontalScrollIndicator={false}
							>
								<StoreCard />
							</ScrollView>
							<View
								style={{
									backgroundColor: 'white',
									height: 250,
									width: '90%',
									elevation: 2,
									borderRadius: 20,
									marginLeft: 20,
									marginBottom: 30,
									marginTop: 20,
								}}
							>
								<Text
									style={{
										marginLeft: 10,
										padding: 20,
										fontSize: 15,
										fontFamily: 'Roboto',
										flex: 1,
										textAlign: 'right',
										fontWeight: 'bold',
										color: 'rgba(6,84,18,1)',
									}}
								>
									Ads here
								</Text>
								<Image
									source={{
										uri:
											'https://postcron.com/en/blog/wp-content/uploads/2016/07/ads.jpg',
									}}
									style={{
										width: '100%',
										height: 170,
										borderBottomLeftRadius: 20,
										borderBottomRightRadius: 20,
									}}
									resizeMode="cover"
								/>
							</View>
						</>
					)}
					{activeTab === 1 && (
						<>
							<View>
								<View
									style={{
										backgroundColor: 'white',
										borderRadius: 20,
										width: '90%',
										height: 50,
										marginHorizontal: 20,
										borderWidth: 1,
										borderColor: 'black',
										marginTop: 10,
									}}
								>
									<TextInput
										placeholder="Type what you want here."
										style={{
											marginLeft: 10,
											marginTop: 10,
										}}
									/>
								</View>
								<View
									style={{
										justifyContent: 'flex-end',
										alignItems: 'flex-end',
									}}
								>
									<TouchableOpacity onPress={() => {}}>
										<View
											style={{
												backgroundColor:
													'rgba(6,84,18,1)',
												borderTopRightRadius: 9,
												borderBottomLeftRadius: 9,
												width: 83,
												height: 30,
												marginLeft: 30,
												justifyContent: 'center',

												marginRight: 20,
												marginTop: 10,
											}}
										>
											<Text
												style={{
													fontFamily: 'Roboto',
													color: 'white',
													alignSelf: 'center',
													fontSize: 16,
												}}
											>
												Post
											</Text>
										</View>
									</TouchableOpacity>
								</View>
								<View
									style={{
										backgroundColor: '#FFF',
										borderRadius: 24,
										width: '100%',
										height: 120,
										marginBottom: 10,
										margin: 20,
										elevation: 2,
										padding: 10,
									}}
								>
									<View style={{ flexDirection: 'row' }}>
										<Text
											style={{
												marginLeft: 10,
												fontSize: 15,
												fontFamily: 'Roboto',
												fontWeight: 'bold',
												color: 'rgba(6,84,18,1)',
											}}
										>
											Froilan Sam Malibiran
										</Text>
										<Text
											style={{
												marginLeft: 50,
												fontSize: 15,
												fontFamily: 'Roboto',
												color: '#7D7D7D',
											}}
										>
											11:00am
										</Text>
									</View>
									<Text
										style={{
											marginLeft: 10,
											fontSize: 15,
											fontFamily: 'Roboto',
											color: 'black',
											width: '80%',
										}}
									>
										Who got extra tomatoes in the house?????
									</Text>
									<TouchableOpacity onPress={() => {}}>
										<View
											style={{
												backgroundColor:
													'rgba(6,84,18,1)',
												borderTopRightRadius: 9,
												borderBottomLeftRadius: 9,
												width: 103,
												height: 30,
												marginLeft: 30,
												justifyContent: 'center',
												alignSelf: 'flex-end',
												marginRight: 20,
												marginTop: 10,
											}}
										>
											<Text
												style={{
													fontFamily: 'Roboto',
													color: 'white',
													alignSelf: 'center',
													fontSize: 16,
												}}
											>
												Make Offer
											</Text>
										</View>
									</TouchableOpacity>
								</View>
								<View
									style={{
										backgroundColor: '#FFF',
										borderRadius: 24,
										width: '100%',
										height: 120,
										marginBottom: 10,
										margin: 20,
										elevation: 2,
										padding: 10,
									}}
								>
									<View style={{ flexDirection: 'row' }}>
										<Text
											style={{
												marginLeft: 10,
												fontSize: 15,
												fontFamily: 'Roboto',
												fontWeight: 'bold',
												color: 'rgba(6,84,18,1)',
											}}
										>
											Lawrence Hermosa
										</Text>
										<Text
											style={{
												marginLeft: 50,
												fontSize: 15,
												fontFamily: 'Roboto',
												color: '#7D7D7D',
											}}
										>
											10:00am
										</Text>
									</View>
									<Text
										style={{
											marginLeft: 10,
											fontSize: 15,
											fontFamily: 'Roboto',
											color: 'black',
											width: '80%',
										}}
									>
										I need pechay.
									</Text>
									<TouchableOpacity onPress={() => {}}>
										<View
											style={{
												backgroundColor:
													'rgba(6,84,18,1)',
												borderTopRightRadius: 9,
												borderBottomLeftRadius: 9,
												width: 103,
												height: 30,
												marginLeft: 30,
												justifyContent: 'center',
												alignSelf: 'flex-end',
												marginRight: 20,
												marginTop: 10,
											}}
										>
											<Text
												style={{
													fontFamily: 'Roboto',
													color: 'white',
													alignSelf: 'center',
													fontSize: 16,
												}}
											>
												Make Offer
											</Text>
										</View>
									</TouchableOpacity>
								</View>
							</View>
						</>
					)}
				</ScrollView>
			</View>
			<BottomSheet
				ref={sheetRef}
				enabledContentGestureInteraction={false}
				onCloseEnd={() => {
					setIsBottomSheetOpen(false);
				}}
				onOpenEnd={() => {
					setIsBottomSheetOpen(true);
				}}
				renderContent={renderContent}
				renderHeader={renderHeader}
				snapPoints={[550, 300, 0]}
			/>
			{isBottomSheetOpen && (
				<View
					style={{
						backgroundColor: 'black',
						opacity: 0.4,
						height: Dimensions.get('window').height,
						width: Dimensions.get('window').width,
						position: 'absolute',
						top: 0,
						left: 0,
					}}
				/>
			)}
		</>
	);
};

HomeScreen.propTypes = {};

export default HomeScreen;
