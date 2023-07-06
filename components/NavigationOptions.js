import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavigationOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity className="p-2 pl-6 pb-8 pt-4 bg-gray-200 w-40 m-2">
          <View>
            <Image
              style={{ height: 120, width: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavigationOptions;
