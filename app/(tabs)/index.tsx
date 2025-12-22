import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useRouter } from 'expo-router'

export default function Index() {
  const router = useRouter()

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: '110%', paddingBottom: 10}}>
        <Image 
          source={icons.logo} 
          style={{ width: 48, height: 40, marginTop: 80, marginBottom: 20, alignSelf: 'center' }} 
        />

        <View className="mt-5">
          <SearchBar
            onPress={() => router.push('/search')}
            placeholder="Search for a movie"
          />
        </View>
      </ScrollView>
    </View>
  );
}
