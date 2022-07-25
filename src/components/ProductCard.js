import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Button,Card,CardActions,CardContent,CardMedia,Rating,Typography} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  console.log(props);
  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="auto"
        image={props.imageLink}
        alt="Image"
      />
      <CardContent>
        <Typography  gutterBottom>
          {props.title}
        </Typography>
        <Typography  gutterBottom>
          ${props.price}
        </Typography>
        <Rating name="read-only" value={props.rating} readOnly gutterBottom/>
        <Button className="card-button" variant="contained" fullWidth>ADD TO CART</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
