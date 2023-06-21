import { Link, Outlet, useParams } from "react-router-dom";
import { useApiGet } from "../utils/hooks";
import { CategoryModel } from "../models";
import CustomSpinner from "./CustomSpinner";
import { Col, Row } from "react-bootstrap";

function Categories() {
  const categories = useApiGet<CategoryModel[]>("categories");
  const params = useParams();
  const categoryId = params["categoryId"];

  console.log(categories);

  if (!categories) {
    return <CustomSpinner />;
  }

  return (
    <>
      <Row>
        <Col md="3">
          {categories.map((category) => (
            <Row>
              <Col
                style={{
                  background:
                    categoryId == category.categoryId ? "lightblue" : "none",
                    fontSize: "1.5em",
                }}
              >
                <Link to={category.categoryId}>{category.title}</Link>
              </Col>
            </Row>
          ))}
        </Col>

        <Col>
          <Outlet />
        </Col>
      </Row>
    </>
  );
}

export default Categories;
