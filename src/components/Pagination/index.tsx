import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";

import "./styles.scss";

export function PaginationDefault() {
  return (
    <Container className="d-flex justify-content-center mb-5">
      <Pagination>
        <Pagination.Prev />

        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>

        <Pagination.Next />
      </Pagination>
    </Container>
  );
}
