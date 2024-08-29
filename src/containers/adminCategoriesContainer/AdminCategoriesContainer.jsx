import { useState } from "react";
import AdminCategories from "../../components/adminCategories/AdminCategories";

const AdminCategoriesContainer = () => {
  const [category, setCategory] = useState("");

  return <AdminCategories category={category} setCategory={setCategory} />;
};

export default AdminCategoriesContainer;
