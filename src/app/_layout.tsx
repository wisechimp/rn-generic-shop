import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";

const RootLayout = () => {
  const headerShown = false;
  return (
    <ToastProvider>
      <Stack>
        <Stack.Screen
          name="(shop)"
          options={{ headerShown: headerShown, title: "Shop" }}
        />
        <Stack.Screen
          name="categories"
          options={{ headerShown: headerShown, title: "Categories" }}
        />
        <Stack.Screen
          name="product"
          options={{ headerShown: headerShown, title: "Product" }}
        />
        <Stack.Screen name="auth" options={{ headerShown: headerShown }} />
        <Stack.Screen
          name="cart"
          options={{ presentation: "modal", title: "Shopping Cart" }}
        />
      </Stack>
    </ToastProvider>
  );
};

export default RootLayout;
