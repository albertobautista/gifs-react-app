import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Pokemon"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories((cat) => [...cat, "Chivas " + Math.random()]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />
      {/* Listado de Gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
