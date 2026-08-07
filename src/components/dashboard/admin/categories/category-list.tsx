import CategoryCard from "./category-card";

const categories = [
  {
    id: "1",
    name: "Apartment",
    description: "Modern apartments for families",
    createdAt: "Aug 07, 2026",
  },

  {
    id: "2",
    name: "Villa",
    description: "Luxury houses",
    createdAt: "Aug 02, 2026",
  },
];

const CategoryList = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
