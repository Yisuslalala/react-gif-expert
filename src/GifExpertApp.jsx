import { useState } from "react";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball Z"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) {
      console.log(`There is another ${newCategory} in categories`);
      return;
    }

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // El prefijo "on" define que va a emitir algo,
        // que va a hacer algo, normalmente en los eventos
        onNewCategory={onAddCategory}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
