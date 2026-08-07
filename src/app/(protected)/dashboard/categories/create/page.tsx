import CategoryForm from "@/components/dashboard/admin/categories/category-form";

const CreateCategoryPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Create Category</h1>

      <CategoryForm />
    </div>
  );
};

export default CreateCategoryPage;
