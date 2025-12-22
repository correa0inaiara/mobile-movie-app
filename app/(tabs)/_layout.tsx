import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { ImageBackground } from 'expo-image'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'
import './../globals.css'

const TabIcon = ({title, focused, icon}:{title: string, focused: boolean, icon: ImageSourcePropType}) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                style={{ borderRadius: 9999, overflow: 'hidden', width: 112, height: 64, marginTop: 16, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                imageStyle={{ borderRadius: 9999 }}
            >
                <Image source={icon} tintColor="#151312" className="size-5" />
                <Text style={{ color: '#151312', marginLeft: 8, fontWeight: '600', fontSize: 16 }}>{title}</Text>
            </ImageBackground>
        )
    }

    return (
        <View style={{ width: 44, height: 44, marginTop: 16, borderRadius: 9999, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={icon} tintColor="#A8B5DB" style={{ width: 20, height: 20 }} />
        </View>
    )
}

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            },
            tabBarStyle: {
                backgroundColor: '#0F0D23',
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 52,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '0F0D23'
            }
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon
                        title="Home"
                        focused={focused} 
                        icon={icons.home}
                    />
                )
            }}
        />

        <Tabs.Screen
            name="search"
            options={{
                title: 'Search',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon
                        title="Search"
                        focused={focused} 
                        icon={icons.search}
                    />
                )
            }}
        />

        <Tabs.Screen
            name="saved"
            options={{
                title: 'Saved',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon
                        title="Saved"
                        focused={focused} 
                        icon={icons.save}
                    />
                )
            }}
        />

        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <TabIcon
                        title="Profile"
                        focused={focused} 
                        icon={icons.person}
                    />
                )
            }}
        />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})