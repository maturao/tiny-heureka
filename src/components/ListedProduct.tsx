import {  Col, Row } from "react-bootstrap";
import { OfferModel } from "../models";
import { useApiGet } from "../utils/hooks";
import { Link } from "react-router-dom";

export type Props = {
  productId: string;
  title: string;
};

function firstOrDefault<T>(arr?: T[] | null): T | undefined {
  if (!arr || arr.length == 0) {
    return undefined;
  }

  return arr[0];
}

function ListedProduct({ productId, title }: Props) {
  const offers = useApiGet<OfferModel[]>(`offers/${productId}/0/1`);

  // logiku ideálně přesunout pryč, může být složitější
  const firstOffer = firstOrDefault(offers);

  return (
    <Col md="12" style={{ border : "1px solid black" , marginBottom: "1em"}}>
      <Row>
        <Col md="2">
          <img
            alt="obrázek produktu"
            src={firstOffer?.imgUrl}
            style={{
              maxWidth: "100%",
              maxHeight: "200px",
            }}
          ></img>
        </Col>
        <Col>
          <h3>{title}</h3>
          {firstOffer?.description}
        </Col>
        <Col md="2">
          <h3>{firstOffer?.price} Kc</h3>
          <Link to={`product/${productId}`}>Porovnat ceny</Link>
        </Col>
      </Row>
    </Col>
  );
}

export default ListedProduct;
