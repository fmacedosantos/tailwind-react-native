import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { CardHorizontalRestaurant } from './restaurant';

export interface RestaurantsProps{
    id: string
    name: string
    image: string
}

export function Restaurants() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch("http://192.168.0.229:3000/restaurants") // pegar o ip da máquina
            const data = await response.json()
            setRestaurants(data)
        }
    
        getRestaurants()
        }, [])

 return (
    <FlatList
    data={restaurants}
    renderItem={({item}) => <CardHorizontalRestaurant restaurant={item}/>}
    horizontal={true}
    contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16}}
    showsHorizontalScrollIndicator={false}
   />
  );
}