import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {

  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async() => {
    let searchQuery = query.get("q") || "";
    console.log(searchQuery);
    let url = `https://my-json-server.typicode.com/Shinsungwoo21/shoppingmallpage/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    console.log(data);
  }

  useEffect(() => {
    getProducts();
  }, [query])

  return (
    <div>
      <Container>
          <Row>
            {productList.map((menu) => (
              <Col lg={3}>
                <ProductCard item={menu} />
              </Col>
            ))}  
          </Row>
      </Container>
    </div>
  )
}

export default ProductAll;
