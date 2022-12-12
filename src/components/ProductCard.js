import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Button,Card,CardActions,CardContent,CardMedia,Rating,Typography} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = (product) => {
  const { name, image, cost, rating } = product.product;
  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="auto"
        image={image}
        alt="Image"
      />
      <CardContent>
        <Typography  gutterBottom>
          {name}
        </Typography>
        <Typography  gutterBottom>
          ${cost}
        </Typography>
        <Rating name="read-only" value={rating} readOnly />
        <Button className="card-button" variant="contained" fullWidth>ADD TO CART</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
