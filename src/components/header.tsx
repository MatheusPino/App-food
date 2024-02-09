import { View, Image } from "react-native";


export function Header () {
  return (
    <View className="flex-row items-center border-b bg-slate-700 pb-5 mx-5">
      <View className="flex-1 px-2">
        <Image source={require("../assets/logo.png")} className="h-6 w-32 "></Image>
      </View>
    </View>
  )
}