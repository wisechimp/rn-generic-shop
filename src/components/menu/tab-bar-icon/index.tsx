import { FontAwesome } from "@expo/vector-icons";

type TabBarIconPropsType = {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  size: number;
};

const TabBarIcon = (props: TabBarIconPropsType) => {
  return <FontAwesome {...props} />;
};

export default TabBarIcon;
