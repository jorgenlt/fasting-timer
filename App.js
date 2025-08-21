import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container.text}>
        Open up App.js to start working on your app!
      </Text>
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
