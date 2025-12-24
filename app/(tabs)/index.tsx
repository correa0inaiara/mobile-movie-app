import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image } from "expo-image";
import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useRouter } from 'expo-router'
import useFetch from "../services/useFetch";
import { fetchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

export default function Index() {
  const router = useRouter()

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError
  } = useFetch(() => fetchMovies({ query: '' }))

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}>
        <Image
          source={icons.logo}
          style={{ width: 48, height: 40, marginTop: 80, marginBottom: 20, alignSelf: 'center' }}
        />

        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000FF"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text className="text-lg text-white font-bold mt-5 mb-3">Error: {moviesError?.message}</Text>
        ) : (
          <View className="mt-5">
            <SearchBar
              onPress={() => router.push('/search')}
              placeholder="Search for a movie"
            />

            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>

              <FlatList
                data={movies?.results}
                renderItem={({ item }) => (
                  <MovieCard {...item} />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: 'flex-start',
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10
                }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )}


      </ScrollView>
    </View>
  );
}
