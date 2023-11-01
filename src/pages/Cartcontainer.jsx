import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Paper,
  Stack,
} from "@mui/material";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";

export default function CartContainer() {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=3");
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData.products);
      } else {
        console.error("Failed to fetch data.");
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Typography variant="h3">Products</Typography>
      <Paper
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        {data.length > 0 ? (
          data.map((product) => (
            <Stack
              key={product.id}
              sx={{
                m: 2,
                width: 350,
                height: 350,
                
              }}
            >
              <Card sx={{ width: "100%", height: "100%",boxShadow: "0px 0px 12px 4px rgba(0,0,0,0.1)", }}>
                <Stack
                  sx={{
                    height: "200px",
                    borderRadius: "10px",
                    padding: "20px",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "4%",
                      objectFit: "cover",
                    }}
                    image={product.thumbnail}
                    alt={product.brand}
                  />
                </Stack>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxHeight: "3.6em",
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    ${product.price}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Rating:
                    <StarBorderPurple500Icon sx={{ verticalAlign: "middle" }} />
                    {product.rating}
                  </Typography>
                </CardContent>
                {/* <CardActions>
                <Button size="small" onClick={() => addToCartHandler(product)}>
                Add to Cart
                </Button>
              </CardActions> */}
              </Card>
            </Stack>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Paper>
    </>
  );
}
