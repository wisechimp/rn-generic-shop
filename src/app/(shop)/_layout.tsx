import { Redirect, Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, StyleSheet } from "react-native";
import TabBarIcon from "../../components/menu/tab-bar-icon";
import { useAuth } from "../../providers/auth-provider";

const activeTabTintColor = "#ff66ff";
const inactiveTabTintColor = "#bbbbbb";
const tabIconSize = 24;

const TabsLayout = () => {
  const { session, mounting, user } = useAuth();

  if (mounting) return <ActivityIndicator />;
  if (!session) return <Redirect href="/auth" />;
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: activeTabTintColor,
          tabBarInactiveTintColor: inactiveTabTintColor,
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 10,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Shop",
            tabBarIcon(props) {
              return (
                <TabBarIcon
                  {...props}
                  name="shopping-cart"
                  size={tabIconSize}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "Orders",
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="book" size={tabIconSize} />;
            },
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
