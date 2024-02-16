import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@mui/material';

function ProductDetail({ match }) {
    const { id } = useParams();
    const history = useNavigate();
    const [qty, setQty] = React.useState('1');

  const handleChange = (event) => {
    setQty(event.target.value);
  };
    const [productData, setProductData] = useState([]);

    const fetchProductsData = async () => {
        try {
            
          const response = await axios.get(`http://127.0.0.1:8000/api/product/${id}`, {
            headers: {
              'Content-Type': 'application/json'
            },
          });
          const data = response.data;
          setProductData(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
    
      useEffect(() => {
        fetchProductsData();
        
      }, []);

     const handleAddToCart = () => {
        history(`/cart/${id}?qty=${qty}`);
      }


      return (
        <Grid container spacing={2}>
            <Grid item xs={6} mt={4}>
                <Link to="/"> Go Back </Link>
                <h2>{productData.name}</h2>
            </Grid>
            <Grid item xs={6} mt={4}>
                <FormControl fullWidth>
                    <InputLabel id="qty-select-label">Quantity</InputLabel>
                    <Select
                        labelId="qty-select-label"
                        id="qty-select"
                        value={qty}
                        onChange={handleChange}
                        label="Quantity"
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    disableElevation
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </Button>
            </Grid>
        </Grid>
    );
}

export default ProductDetail
