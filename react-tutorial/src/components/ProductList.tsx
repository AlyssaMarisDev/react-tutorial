import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface ProductListProps {
  selectedCategory: string;
  products: Product[];
}

const ProductList = ({ products, selectedCategory }: ProductListProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  return (
    <div>
      {filteredProducts.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductList;
