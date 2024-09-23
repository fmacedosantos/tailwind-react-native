import { Text, View } from 'react-native';

interface Props{
    name: string
    size: "text-lg" | "text-xl" | "text-2xl"
    label: string
    action: () => void
}

export function Section({name, size, label, action}: Props) {
 return (
   <View className=''>
    <Text>Famo</Text>
   </View>
  );
}