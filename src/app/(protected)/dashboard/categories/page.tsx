import CategoryList from "@/components/dashboard/admin/categories/category-list";

const CategoriesPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Categories</h1>

          <p className="text-muted-foreground">Manage property categories</p>
        </div>
      </div>

      <CategoryList />
    </div>
  );
};

export default CategoriesPage;
