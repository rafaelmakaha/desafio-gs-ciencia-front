import React, { useEffect, useState } from 'react';
import { createProduct, deleteProductById, getProductById, updateProduct } from '../../services';
import { useParams, useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import { ButtonsWrapper, Container, Form, Typography, ButtonSaveContainer } from './style';
import { Button } from '@material-ui/core';

const Product = () => {
  const [product, setProduct] = useState({});

  const params = useParams();
  const history = useHistory();

  const handlePush = () => {
    history.push('/');
  }

  const handleSubmit = (type) => () => {
    const actionButton = {
      create: (product) => {console.log(product);createProduct(product); history.push('/');},
      update: updateProduct,
      delete: (product) => {deleteProductById(product); history.push('/')},
    }
    if (actionButton[type]) 
      actionButton[type](product)
      .then(console.log)
  }

  useEffect(() => {
    if ('id' in params)
      getProductById(params)
      .then(setProduct)
      .catch(console.log)
  },[]);

  return(
    <Container>
        <Typography variant="h3" gutterBottom>
          {'id' in params ? 'Editar Produto' : 'Inserir Produto'}
        </Typography>
        <Form noValidate autoComplete="off">
          <TextField id="outlined-basic" value={product.name} label="Name" variant="outlined" />
          <TextField id="outlined-basic" value={product.description} label="Description" variant="outlined" />
          <TextField id="outlined-basic" value={product.price} label="Price" variant="outlined" type='number' />
          <ButtonsWrapper>
            <Button variant="contained" color="primary" onClick={handlePush}>
              Back
            </Button>
            <ButtonSaveContainer>
              {'id' in params && 
              <Button variant="contained" color="secondary" onClick={handleSubmit('delete')}>
                Delete
              </Button>
              }
              <Button variant="contained" color="primary" onClick={handleSubmit('id' in params ? 'update' : 'create')}>
                Save
              </Button>
            </ButtonSaveContainer>
          </ButtonsWrapper>
      </Form>
    </Container>
  )
}

export default Product;