import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, Icon, Button } from 'native-base';
import { Dimensions, ScrollView, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Carousel from 'react-native-snap-carousel';
import Sidebar from '../components/Sidebar';
import Tabs from '../components/Tabs';
import Ionicon from '~/components/Ionicon';
import ProductCard from '../components/ProductCard';
import StoreCard from '../components/StoreCard';

const HomeScreen = (props) => {
	const [activeTab, setActiveTab] = useState(0);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
	const sheetRef = useRef(null);
	const carouselRef = useRef(null);

	const carouselItems = [
		{
			title: 'Item21',
			text: 'Text 1',
		},
		{
			title: 'Item 2',
			text: 'Text 2',
		},
		{
			title: 'Item 3',
			text: 'Text 3',
		},
		{
			title: 'Item 4',
			text: 'Text 4',
		},
		{
			title: 'Item 5',
			text: 'Text 5',
		},
	];

	useEffect(() => {
		sheetRef.current.snapTo(2);
		setIsBottomSheetOpen(false);
	}, []);

	const handleSwitch = (tab) => {
		setActiveTab(tab);
	};

	const openBottomSheet = () => sheetRef.current.snapTo(0);

	const renderItem = ({ item, index }) => {
		return (
			<View
				style={{
					backgroundColor: 'floralwhite',
					borderRadius: 5,
					height: 250,
					padding: 50,
					marginLeft: 25,
					marginRight: 25,
				}}
			>
				<Button
					onPress={() => {
						carouselRef.current.snapToNext();
					}}
				>
					<Text>Nxt</Text>
				</Button>
				<Text style={{ fontSize: 30 }}>{item.title}</Text>
				<Text>{item.text}</Text>
			</View>
		);
	};

	const renderContent = () => (
		<View
			style={{
				backgroundColor: 'rgba(201,245,202,1)',
				height: 420,
			}}
		>
			<View
				style={{
					backgroundColor: 'white',
					height: 300,
					borderBottomLeftRadius: 30,
					borderBottomRightRadius: 30,
					padding: 10,
				}}
			>
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
						<Ionicon
							name="heart"
							style={{
								color: 'rgba(6,84,18,1)',
								fontSize: 18,
								alignSelf: 'center',
							}}
						/>
					</View>
				</TouchableOpacity>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'center',
					}}
				>
					<Carousel
						ref={carouselRef}
						data={carouselItems}
						itemWidth={300}
						layout="default"
						onSnapToItem={(index) => setActiveIndex(index)}
						renderItem={renderItem}
						sliderWidth={300}
					/>
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
				<Sidebar />
				<ScrollView>
					<Text
						style={{
							marginLeft: 10,
							padding: 20,
							fontSize: 20,
							fontFamily: 'Roboto_medium',
						}}
					>
						Buy Goodies
					</Text>
					<Tabs activeTab={activeTab} handleSwitch={handleSwitch} />
					<Text
						style={{
							marginLeft: 10,
							padding: 20,
							fontSize: 15,
							fontFamily: 'Roboto',
						}}
					>
						Near you
					</Text>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
					>
						<ProductCard openBottomSheet={openBottomSheet} />
					</ScrollView>
					<Text
						style={{
							marginLeft: 10,
							padding: 20,
							fontSize: 15,
							fontFamily: 'Roboto',
						}}
					>
						Stores
					</Text>
					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
					>
						<StoreCard />
					</ScrollView>
					<Carousel
						ref={carouselRef}
						data={carouselItems}
						itemWidth={300}
						layout="default"
						onSnapToItem={(index) => setActiveIndex(index)}
						renderItem={renderItem}
						sliderWidth={300}
					/>
				</ScrollView>
			</View>
			<BottomSheet
				ref={sheetRef}
				onCloseEnd={() => {
					setIsBottomSheetOpen(false);
				}}
				onOpenStart={() => {
					setIsBottomSheetOpen(true);
				}}
				renderContent={renderContent}
				renderHeader={renderHeader}
				snapPoints={[450, 300, 0]}
				enabledContentTapInteraction={false}
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
