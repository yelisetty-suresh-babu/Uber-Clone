import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import imgurl from "../assets/Uber-logo.jpg";
import NavigationOptions from "../components/NavigationOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="p-5">
        <Image source={imgurl} className="resize h-[50px] w-[100px] " />
        <NavigationOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
