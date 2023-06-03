import React, { Fragment, useState, useEffect } from "react";
import { Button, Card, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/material";




function Cart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44373/api/Shop/ProductListCart")
      .then((result) => {
        setData(result.data.listproducts);
        console.log(result.data.listproducts);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);



//////////
  const remove = (productId) => {

    axios
    .delete(`https://localhost:44373/api/Shop/DeleteProduct/${productId}`)
      .then((result) => {
        if (result.data.statusCode === "200") {
          alert("item deleted from  Cart");
        } 
        console.log("productId", productId);
        console.log("deleted item item", result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

///////////


  return (
    <div className="container mt-3">
    
    <h1> <u> CART</u></h1>
    
      <div className="row d-flex justify-content-center align-items-center">
        {data && data.length > 0
          ? data.map((item, index) => {
              return (
                <>
                  <Card
                    style={{ width: "22rem", border: "none" }}
                    className="mx-2 mt-4 card_style"
                  >
                    <Card.Img
                      variant="top"
                      src={`assets/images/${item.image}` }
                      
                      style={{ height: "16rem" }}
                    />
                    <Card.Body>
                      <Card.Text>{item.id}</Card.Text>
                      <Card.Text>{item.name}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <h6>price:</h6>
                        <p>{item.actualPrice}</p>
                        <h6>premium price:</h6>
                        <p>{item.discountedPrice}</p>
                      </ListGroup.Item>
                    </ListGroup>
                    <Button
                            variant="danger"
                            onClick={()=>remove(item.id)}
                          >
                            Delete
                          </Button>

                          <Box textAlign = "center">
      <Link to={"/ShipComp"}>
          <Button className='mb-3' variant="success" > Buy Now </Button> 
      </Link>
      </Box>
                  </Card>
                </>
              );
            })
          : "No data"}
      </div>
    </div>
  );
}
export default Cart;