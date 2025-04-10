import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ProductDetail = () => {

  let { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Shinsungwoo21/shoppingmallpage/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  const [selectedSize, setSelectedSize] = useState('사이즈 선택');

  const handleSelect = (e) => {
    setSelectedSize(e);
  };


  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} width={330} alt="productdetailimg"/>
        </Col>
        <Col className='product-info'>
          <div>{product?.title}</div>
          <div>{`\\ ${product?.price}`}</div>
          <div style={{ fontSize: '12px' }}>{product?.choice == true ? "Conscious Choice" : ""}</div>
          <DropdownButton 
            id="dropdown-basic-button" 
            title={selectedSize}
            className="custom-dropdown" 
            variant=""
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="S">S</Dropdown.Item>
            <Dropdown.Item eventKey="M">M</Dropdown.Item>
            <Dropdown.Item eventKey="L">L</Dropdown.Item>
          </DropdownButton>
          <button type='text' style={{ borderRadius: '5px', backgroundColor: 'black', color: 'white', }}>추가</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail;
