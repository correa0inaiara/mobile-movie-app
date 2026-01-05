import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Image } from 'expo-image'
import MaskedView from '@react-native-masked-view/masked-view'
import { images } from '@/constants/images'

const TrendingCard = ({movie: {movie_id, title, poster_url}, index}: TrendingCardProps) => {
  return (
    <View>
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity className='w-32 relative pl-5'>
                <Image
                    source={{ uri: poster_url }}
                    className="w-32 h-48 rounded-lg"
                    style={{ width: '100%', height: 200}}
                    contentFit='contain'
                 />

                 <View className='absolute bottom-9 -left-3.5 px-2 py-1 rounded-full'>
                    <MaskedView maskElement={
                        <Text className='font-bold text-white text-6xl'>{index + 1}</Text>
                    }>
                        <Image 
                            source={images.rankingGradient}
                            className='size-14'
                            style={{ width: 140, height: 140 }}
                         />
                    </MaskedView>
                 </View>

                 <Text className='text-sm font-bold mt-2 text-light-200'>
                    {title}
                 </Text>
            </TouchableOpacity>
        </Link>
    </View>
  )
}

export default TrendingCard