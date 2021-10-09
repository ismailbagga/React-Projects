import React, { useState, useEffect } from "react";
import data from "./data";
import Recipe from "./Recipe";
const App = () => {
  console.log("Page render");
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(new Set());
  useEffect(() => {
    // needed in  cases where data change there for categories change
    // let categoriesSet = new Set();
    // menu.forEach((element) => {
    //   categoriesSet.add(element.category);
    // });
    // setCategories(categoriesSet);
  }, [menu.length]);
  useEffect(() => {
    let set = new Set(["all"]);
    data.forEach((elem) => {
      set.add(elem.category);
    });

    setCategories(set);
  }, []);
  function filterRecipes(category) {
    if (category === "all") setMenu(data);
    else {
      setMenu(data.filter((recipe) => recipe.category === category));
    }
  }
  return (
    <main className="container">
      <h1 className="text-header">Our Menu</h1>
      <div className="Categories">
        {Array.from(categories).map((category, i) => {
          return (
            <button
              key={i}
              className="categorie-btn"
              onClick={() => {
                filterRecipes(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="menu">
        {menu.map((item) => {
          return <Recipe key={item.id} recipe={item} />;
        })}
      </div>
    </main>
  );
};

export default App;
