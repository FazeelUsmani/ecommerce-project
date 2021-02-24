import React from 'react'
import { Card } from 'react-bootstrap'

function Product({product}) {
    return (
        <div>
        <Card className=" my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} />
        </a>
        Product     
        
        <Card.body>
        <a href={`/product/${product._id}`}>
        <Card.Title as="div">
        <strong>{product.name}</strong>
        </Card.Title>
        </a>
        <Card.text as="div">
        <div className="my-3">
        {product.rating} from {product.numReviews}
        </div>
        
        </Card.text>
        
        <Card.text as="h3">
        ${product.price}
        </Card.text>
        </Card.body>
        
        </Card>
        </div>

    )
}

export default Product
