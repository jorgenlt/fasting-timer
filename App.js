import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./components/Timer";

const App = () => {
  return (
    <View style={styles.container}>
      <Timer />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ff",
    text: {
      color: "#ffffffff",
    },
    alignItems: "center",
    justifyContent: "center",
  },
});
