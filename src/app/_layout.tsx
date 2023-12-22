import { AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Stack } from "expo-router"
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

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
        <Stack screenOptions={{
            headerStyle:{}
        }} >
            <Stack.Screen name="index" options={{title: 'DEVember'}} />

        </Stack>
    )
}