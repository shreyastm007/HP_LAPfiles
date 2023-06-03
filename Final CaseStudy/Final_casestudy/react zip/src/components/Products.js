import React, { Fragment, useState, useEffect } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44373/api/Shop/ProductList")
      .then((result) => {
        setData(result.data.listproducts);
        console.log("Products", result.data.listproducts);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const handleAddproduct = (id) => {
    const data = {
      id: id,
    };
    axios
      .post("https://localhost:44373/api/Shop/AddProduct", data)
      .then((result) => {
        if (result.data.statusCode === "200") {
          alert("item added to Cart");
        } 
        console.log("Added Cart item", result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container mt-3">
    <h1 > <u> PRODUCTS </u></h1>
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
                    <Card.Body>
                      <div className="button_div d-flex justify-content-right">
                        <Link to="/Cart">
                          <Button
                            variant="dark"
                            onClick={()=>handleAddproduct(item.id)}
                          >
                            Add to Cart🛒
                          </Button>

                         

                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </>
              );
            })
          : "No data"}
      </div>
    </div>
  );
}
export default Products;