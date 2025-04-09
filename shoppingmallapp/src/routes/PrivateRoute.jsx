import React from 'react'
import ProductDetail from '../pages/ProductDetail';

const PrivateRoute = ({ authenticate }) => {
  return (
    <div>
      return authentiacate == true ? <ProductDetail/> : <Navigate to ="/login"/>
    </div>
  )
}

export default PrivateRoute;
