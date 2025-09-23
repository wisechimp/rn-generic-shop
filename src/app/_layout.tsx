import { Stack } from "expo-router";

const RootLayout = () => {
  const headerShown = false;
  return (
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
  );
};

export default RootLayout;
