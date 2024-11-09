import { Stack,Tabs } from "expo-router";
import {Ionicons} from '@expo/vector-icons'
export default function RootLayout(){
return(
 
    <Tabs>
        <Tabs.Screen
            name ="index"
            options = {{
                tabBarIcon : ()=> (
                    <Ionicons name="home" />
                )
            }}
        />
        <Tabs.Screen
            name = "details"
            options = {{
                tabBarIcon : () => (
                    <Ionicons name="person"/>
                )
            }}
        />

    </Tabs>
);

}