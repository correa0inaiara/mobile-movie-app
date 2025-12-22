import { Link } from "expo-router";
import { Text, View } from "react-native";
// import "./globals.css"

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      {/* <Text className="text-5xl text-[#123123] font-bold">Teste</Text>
      <Text className="text-5xl text-accent font-bold">Teste</Text>
      <Text className="text-5xl text-dark-200 font-bold">Teste</Text> */}
      <Text className="text-5xl text-primary font-bold">Welcome!</Text>
      {/* <Link href="/onboarding">Onboarding</Link>
      <Link href="/movie/avengers">Avengers Movie</Link> */}
    </View>
  );
}
