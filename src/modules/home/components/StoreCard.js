import React from "react";
import PropTypes from "prop-types";
import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "native-base";
import Ionicon from "~/components/Ionicon";

const StoreCard = (props) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#FFF",
          borderRadius: 24,
          width: 146,
          height: 180,
          marginBottom: 10,
          margin: 20,
          elevation: 2,
          padding: 10,
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "rgba(6,84,18,1)",
              borderTopRightRadius: 16,
              borderBottomLeftRadius: 16,
              width: 34,
              height: 30,
              alignSelf: "flex-end",
              justifyContent: "center",
            }}
          >
            <Ionicon
              name="heart"
              style={{
                color: "rgba(201,245,202,1)",
                fontSize: 18,
                alignSelf: "center",
              }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            bottom: 0,
            position: "absolute",
            marginLeft: 15,
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              color: "rgba(20,117,22,1)",
              fontFamily: "Roboto_medium",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Jollibee
          </Text>
          <Text
            style={{
              fontFamily: "Roboto_medium",
              fontSize: 10,
            }}
          >
            Marikina Branch
          </Text>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "rgba(6,84,18,1)",
                borderTopRightRadius: 16,
                borderBottomLeftRadius: 16,
                width: 119,
                height: 29,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <Text
                style={{
                  color: "rgba(201,245,202,1)",
                  fontFamily: "Roboto_medium",
                  fontSize: 10,
                  fontWeight: "bold",
                }}
              >
                See Goodies
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          left: 5,
          top: 5,
          position: "absolute",
          elevation: 3,
          shadowOpacity: 0,
          zIndex: 2,
        }}
      >
        <Image
          source={{
            uri:
              "https://i1.wp.com/www.goodnewspilipinas.com/wp-content/uploads/2017/07/Jollibee-Chicken-Joy.png?resize=550%2C483",
          }}
          resizeMode="cover"
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

StoreCard.propTypes = {};

export default StoreCard;
