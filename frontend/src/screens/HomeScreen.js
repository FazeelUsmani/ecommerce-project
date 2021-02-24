import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

function HomeScreen() {
    return (
        <div>
            Latest Products
            <Row>
                {products.map(product=>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <h3>{product.name}</h3>
                        <Product product={product}></Product>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen