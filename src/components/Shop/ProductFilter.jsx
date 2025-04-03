import React, { useState } from "react";
import { FilterContainer, Label, Select, Input } from "./ProductFilter.style";

const ProductFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({ search: "", category: "", price: "" });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    onFilter({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <FilterContainer>
      <Label>Cari Produk</Label>
      <Input type="text" name="search" placeholder="Cari..." onChange={handleChange} />

      <Label>Kategori</Label>
      <Select name="category" onChange={handleChange}>
        <option value="">Semua</option>
        <option value="Telur">Telur</option>
        <option value="Daging">Daging</option>
        <option value="Bibit">Bibit</option>
        <option value="Pakan">Pakan</option>
        <option value="Vitamin">Vitamin</option>
      </Select>

      <Label>Harga</Label>
      <Select name="price" onChange={handleChange}>
        <option value="">Default</option>
        <option value="low">Termurah</option>
        <option value="high">Termahal</option>
      </Select>
    </FilterContainer>
  );
};

export default ProductFilter;
