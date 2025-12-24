import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image'
import { images } from '@/constants/images'
import MovieCard from '../components/MovieCard'
import useFetch from '../services/useFetch'
import { fetchMovies } from '../services/api'
import { icons } from '@/constants/icons'
import SearchBar from '../components/SearchBar'

const search = () => {

  const [searchQuery, setSearchQuery] = useState('')

   const {
    data: movies,
    loading: moviesLoading,
    error: moviesError
  } = useFetch(() => fetchMovies({
    query: searchQuery
  }), false)

  return (
    <View className='flex-1 bg-primary'>
      <Image 
        source={images.bg} 
        className='flex-1 absolute w-full x-0'
        style={{width: '100%', height: 200}}
        contentFit='contain'
      />

      <FlatList 
        data={movies?.results}
        renderItem={({item}) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className='px-5'
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'center',
          gap: 16,
          marginVertical: 16
        }}
        contentContainerStyle={{paddingBottom: 100}}
        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center mt-20 items-center'>
              <Image source={icons.logo} className='w-12 h-10' />
            </View>

            <View className='my-5'>
              <SearchBar 
                placeholder="Search movies..."
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>

            {moviesLoading && (
              <ActivityIndicator
                size="large"
                color="#0000FF"
                className='my-3'
              />
            )}

            {moviesError && (
              <Text className='text-red-500 px-5 my-3'>
                Error: {moviesError.message}
              </Text>
            )}

            {!moviesLoading && !moviesError && searchQuery.trim() && movies?.results.length > 0 && (
              <Text className='text-xl text-white font-bold'>
                Search Results for{' '}
                <Text className='text-accent'>
                  {searchQuery}
                </Text>
              </Text>
            )}
          </>
        }
      />
    </View>
  )
}

export default search

const styles = StyleSheet.create({})