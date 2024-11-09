import { StyleSheet, Text, View,Button } from "react-native";
import { Link,useRouter } from "expo-router";
import { useReducer, useState } from "react";
import { TextInput } from "react-native-web";

export default function Page() {

  const [username,setusername] = useState('')
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Home</Text>
        <TextInput 
          placeholder="Username"
          value = {username}
          onChangeText={setusername}
        />
        <Button
        title="Submit"
        onPress={() => router.push({ pathname: 'details', params: { username } })}
        />
        <Link href="/details">details</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
