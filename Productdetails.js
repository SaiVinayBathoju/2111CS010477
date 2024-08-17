// ProductDetails.js
import React from 'react';
import { fetchProductDetails } from '../api';

const ProductDetails = ({ match }) => {
  const productId = match.params.productId;
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProductDetails(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);
}