import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardFunction from './Card'; // Import your Card component
import axios from 'axios'

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const [productsData, setProductsData] = useState([]);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  const fetchProductsData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/products/', {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = response.data;
      setProductsData(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

return (
  <Grid sx={{ flexGrow: 1 }} container spacing={2}>
    <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={spacing}>
      {productsData.map((data) => (
                <Grid key={data._id} className="px-2"> 
                  <CardFunction data={data} />
                </Grid>
              ))}
      </Grid>
    </Grid>
  </Grid>
);
}
