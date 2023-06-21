import { PropsWithChildren } from "react";
import { Container, Navbar } from "react-bootstrap";

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = PropsWithChildren<{}>;

function Layout({ children }: Props) {
  return (
    <>
      <Navbar bg="primary">
        <Container fluid>
          <Navbar.Brand className="text-white">Tiny Heureka</Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid>{children}</Container>
    </>
  );
}

export default Layout;
