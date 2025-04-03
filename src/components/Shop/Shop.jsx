import React, { useState } from "react";
import { 
  ShopContainer, 
  ContentWrapper, 
  Sidebar, 
  ProductSection, 
  ProductGrid,
  CoverSection 
} from "./Shop.style";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import Pagination from "./Pagination";
import ProductModal from "./ProductModal/ProductModal";

import image1 from "../../assets/Images/Products/telur.webp";
import image2 from "../../assets/Images/Products/daging.webp";
import image3 from "../../assets/Images/Products/bibit ayam.webp";
import image4 from "../../assets/Images/Products/pakan.webp";
import image5 from "../../assets/Images/Products/vitamin.webp";

const allProducts = [
  { id: 1, name: "Telur Ayam Kampung", price: 30000, category: "Telur", stock: 50, image: image1 },
  { id: 2, name: "Daging Ayam Segar", price: 40000, category: "Daging", stock: 30, image: image2 },
  { id: 3, name: "Bibit Ayam Kampung", price: 10000, category: "Bibit", stock: 40, image: image3 },
  { id: 4, name: "Pakan Ternak 50kg", price: 250000, category: "Pakan", stock: 100, image: image4 },
  { id: 5, name: "Vitamin Ayam", price: 50000, category: "Vitamin", stock: 20, image: image5 },
];

const Shop = ({ addToCart, cartItems, removeFromCart }) => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productsPerPage = 10;

  const handleFilter = (filters) => {
    let filtered = allProducts;

    if (filters.search) {
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(filters.search.toLowerCase()));
    }

    if (filters.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    if (filters.price === "low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (filters.price === "high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <ShopContainer>
      <CoverSection>
        <div className="cover-content">
          <h1>Biner Farm Land</h1>
          <p>Solusi Lengkap untuk Kebutuhan Peternakan Anda. Temukan Produk Berkualitas dengan Harga Terjangkau.</p>
        </div>
      </CoverSection>

      <ContentWrapper>
        <Sidebar>
          <ProductFilter onFilter={handleFilter} />
        </Sidebar>
        <ProductSection>
          <ProductGrid>
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} onBuyClick={() => setSelectedProduct(product)} />
            ))}
          </ProductGrid>
          <Pagination
            totalProducts={filteredProducts.length}
            productsPerPage={productsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </ProductSection>
      </ContentWrapper>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart} // Panggil fungsi addToCart dari props
          onBuyNow={(product, qty) => console.log(`Beli sekarang: ${product.name} - ${qty}`)}
        />
      )}
    </ShopContainer>
  );
};

export default Shop;