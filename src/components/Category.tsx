import { useParams } from "react-router-dom";
import { useApiGet } from "../utils/hooks";
import { CategoryModel, ProductModel } from "../models";
import CustomSpinner from "./CustomSpinner";
import { Row } from "react-bootstrap";
import ListedProduct from "./ListedProduct";

function Category() {
  const params = useParams();
  const categoryId = params["categoryId"];

  const category = useApiGet<CategoryModel>(`category/${categoryId}`);
  const products = useApiGet<ProductModel[]>(`products/${categoryId}`);

  if (!category || !products) {
    return <CustomSpinner />;
  }

  return (
    <>
      <h1>
        Kategorie <em>{category.title}</em>
      </h1>
      <Row>
        {products.map((product) => (
          <ListedProduct productId={product.productId} title={product.title} />
        ))}
      </Row>
    </>
  );
}

export default Category;
