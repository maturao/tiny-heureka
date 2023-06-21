import { Navigate, Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import Category from "./Category";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Navigate to="/category" />} />

          <Route path="category" element={<Categories />}>
            <Route path=":categoryId" element={<Category />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
