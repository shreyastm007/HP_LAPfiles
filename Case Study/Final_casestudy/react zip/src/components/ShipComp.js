import { Box } from "@mui/material";
import { Button } from "react-bootstrap";
import { Link} from "react-router-dom";
function ShipComp() {
    return (


<div >
    <h2>Product Shipped Successfully✅ </h2>
    <h4> You will receive a message shorty regarding your shipping address.</h4>
    <h6><i> Thank You for shopping with us.....</i></h6>
    <Box textAlign = "left">
      <Link to={"/Products"}>
       
          <Button className='mb-3' variant="warning" > Continue Shopping </Button>
       
      </Link>
      </Box>
</div>
  );
}

export default ShipComp;