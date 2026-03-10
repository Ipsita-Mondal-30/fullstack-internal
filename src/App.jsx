import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import "./App.css";

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
  { id: 3, name: "T-shirt", category: "Clothing", price: 800 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
  { id: 5, name: "Coffee Mug", category: "Home", price: 300 },
];

function App(){
  const[searchTerm,setSearchTerm]=useState("");
  const[selectedCategory,setSelectedCategory]=useState("All");
  const filteredProducts=products.filter((product)=>{
    const matchesSearch=product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory=selectedCategory==="All"||product.category===selectedCategory;
    return matchesSearch&&matchesCategory;
  });


  return (
    <div className="app">
      <h1>Product Search</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <CategoryFilter value={selectedCategory} onChange={setSelectedCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
