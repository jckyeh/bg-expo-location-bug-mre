import { Button, StyleSheet } from "react-native";
import * as Location from "expo-location";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { LOCATION_TASK_NAME } from "../_layout";

const requestPermissions = async () => {
  console.log("requesting permissions");

  const { status: foregroundStatus } =
    await Location.requestForegroundPermissionsAsync();
  if (foregroundStatus === "granted") {
    const { status: backgroundStatus } =
      await Location.requestBackgroundPermissionsAsync();
    if (backgroundStatus === "granted") {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
        showsBackgroundLocationIndicator: true,
      });

      console.log("Location updates started.");
    }
  }
};

const PermissionsButton = () => (
  <View style={{}}>
    <Button onPress={requestPermissions} title="Enable background location" />
  </View>
);

export default function TabOneScreen() {
  console.log("rendering TabOneScreen");
  return (
    <View style={styles.container}>
      <PermissionsButton />
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
