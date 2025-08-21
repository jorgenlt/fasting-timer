import { View, Text } from "react-native";

const Timer = () => {
  return (
    <View>
      <Text style={styles.timer}>00:00</Text>
    </View>
  );
};

const styles = {
  timer: {
    fontSize: 48,
    color: "#ffffff",
    textAlign: "center",
    marginTop: 20,
  },
};

export default Timer;
