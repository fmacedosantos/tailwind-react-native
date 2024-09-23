import { Text, View, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView 
    className="flex-1 bg-slate-200"
    showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{marginTop: statusBarHeight + 8}}>
        <Header/>

        <Banner/>

        <Search/>
      </View>

      <Section
        name="Comidas em alta"
        label="Veja mais"
        action={() => console.log("Clicou no veja mais")}
        size="text-2xl"
      />

      <TrendingFoods/>
      
    </ScrollView>
  );
}
