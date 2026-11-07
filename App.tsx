import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import MainCard from "./MainCard";
import { useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const nombre = "Jennifer Eunice";
  const apellido = "Yand Destine";

  const btnTitle = isLoading ? "Mostrar" : "Cargar";

  return (
    <View style={styles.container}>
      <Text>
        Hello world by {nombre} {apellido}
      </Text>
      <StatusBar style="auto" />

      <View style={styles.buttonContainer}>
        <Button title={btnTitle} onPress={() => setIsLoading(!isLoading)} />
      </View>

      <MainCard loading={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#26fcf1",
    alignItems: "center",
    justifyContent: "center",
  },
});
