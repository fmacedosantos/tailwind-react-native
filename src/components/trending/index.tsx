import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import CardHorizontalFood from './food';

export function TrendingFoods() {
    const [foods, setFoods] = useState([])

    useEffect(() => {
    async function getFoods() {
        const response = await fetch("http://192.168.0.229:3000/foods") // pegar o ip da máquina
        const data = await response.json()
        setFoods(data)
    }

    getFoods()
    }, [])
 return (
   <FlatList
    data={foods}
    renderItem={({item}) => <CardHorizontalFood/>}
    horizontal={true}
   />
  );
}