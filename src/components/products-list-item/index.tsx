import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "../../types/product";
import { Link } from "expo-router";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link asChild href={`/product/${product.slug}`}>
      <Pressable style={styles.product}>
        <View style={styles.productImageContainer}>
          <Image source={product.heroImage} style={styles.productImage} />
        </View>
        <View style={styles.productTextContainer}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  product: {
    width: "48%",
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  productImageContainer: {
    borderRadius: 10,
    width: "100%",
    height: 150,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  productTextContainer: {
    padding: 8,
    alignItems: "flex-start",
    gap: 4,
  },
  productTitle: {
    fontSize: 16,
    color: "#888",
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
