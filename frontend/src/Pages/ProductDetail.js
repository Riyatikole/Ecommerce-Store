import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

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
    <div>
        <Link to = '/'> Go Back </Link>
        {productData.name}

        <div>
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={qty}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={1}>1</MenuItem>
    <MenuItem value={2}>2</MenuItem>
    <MenuItem value={3}>3</MenuItem>
  </Select>
</FormControl>
        </div>
        <div>
        <Button variant="contained" 
        disableElevation
        onClick={handleAddToCart}>
  Add to Cart
</Button>
        </div>
      
    </div>
  )
}

export default ProductDetail
