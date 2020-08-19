import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'native-base';
import { Dimensions } from 'react-native';

const Sidebar = (props) => {
	return (
		<View
			style={{
				width: 50,
				backgroundColor: 'rgba(6,84,18,1)',
				height: Dimensions.get('screen').height,
				borderTopRightRadius: 100,
			}}
		/>
	);
};

export default Sidebar;
