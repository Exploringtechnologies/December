import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import DayListItem from '../../src/components/core/DayListItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {

  const [fontLoaded, error]=useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_700Bold,
  });

  useEffect(() =>{
    if(fontLoaded || error){
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, error]);


  if(!fontLoaded && !error){
    return null;
  }


  return (
    <View style={styles.container}>

      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        numColumns={2}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => <DayListItem day={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});