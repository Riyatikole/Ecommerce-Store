import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CardFunction from "./Card"; // Import your Card component
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(1);
  // const [productsData, setProductsData] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  // const fetchProductsData = async () => {
  //   // try {
  //   //   const response = await axios.get('http://127.0.0.1:8000/api/products/', {
  //   //     headers: {
  //   //       'Content-Type': 'application/json'
  //   //     },
  //   //   });
  //   //   const data = response.data;
  //   //   setProductsData(data);
  //   // } catch (error) {
  //   //   console.error("Error fetching products:", error);
  //   // }
  // };

  useEffect(() => {
    dispatch(listProducts());
    console.log(productList);
  }, []);

  return (
    <div>
      <h1>Latest Product</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Grid sx={{ flexGrow: 1 }} container spacing={10}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
              {products.map((data) => (
                <Grid key={data._id} className="px-2">
                  <CardFunction data={data} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
