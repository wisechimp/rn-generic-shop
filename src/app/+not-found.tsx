import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen
        options={{ title: "Oops, this isn't the page you were looking for!" }}
      />
      <View style={styles.container}>
        <Link href="/">Go Home!</Link>
      </View>
    </>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
