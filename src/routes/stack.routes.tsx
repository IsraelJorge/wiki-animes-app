import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnimeDetails } from "../screens/AnimeDetails";
import { TabRoutes } from "./tab.routes";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="tabHome" component={TabRoutes} />
      <Screen
        name="animeDetails"
        component={AnimeDetails}
        options={{
          gestureEnabled: true,
          presentation: "modal",
        }}
      />
    </Navigator>
  );
}
