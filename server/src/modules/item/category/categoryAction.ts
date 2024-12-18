const categories = [
    {
      id: 1,
      name: "Comédie",
    },
    {
      id: 2,
      name: "Science-Fiction",
    },
  ];
  
  export const getCategories = () => {
    return categories;
  };
  
  export const getCategoryById = (id: number) => {
    return categories.find((category) => category.id === id);
  };
  