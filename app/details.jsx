import { StyleSheet, Text, View } from "react-native";
import { Link, router,useRouter,useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Button } from "react-native-web";

function details({}){
    const {username} = useLocalSearchParams()
    const router = useRouter()
    return(
        <View>
            <Text>Details Screen</Text>
            <Text> Username : {username}</Text>
            <Button 
            title="Back" 
            onPress={()=> router.back()}
            />
        </View>
    )

}
export default details;