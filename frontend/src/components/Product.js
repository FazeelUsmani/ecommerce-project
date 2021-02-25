import React from 'react'
import { Card } from 'react-bootstrap'
/*
function Product() {
    return (
        <div>
            Product
        </div>
    )
}

export default Product
*/

function Product({ product }) {
    return (
  
        <Card className=" my-3 p-3 rounded">
            <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} />
            </a>
              

            <Card.body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <div className="my-3">
                        {product.rating} from {product.numReviews} numReviews
                    </div>
                </Card.Text>
                
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.body>            
        </Card>
        
    );
}

export default Product