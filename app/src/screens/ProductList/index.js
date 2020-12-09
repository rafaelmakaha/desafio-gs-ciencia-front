import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../services';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { ButtonsWrapper, Container, TableWrapper, Typography } from './style';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .catch(console.log)
  },[]);

  return(
    <Container>
      <Typography variant="h3" gutterBottom>
          Welcome!
      </Typography>
      <ButtonsWrapper>
        <Button variant="contained" color="primary" onClick={() => history.push('/product')}>
          New Product
        </Button>
      </ButtonsWrapper>
      <TableWrapper>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product </TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row) => (
                <TableRow key={row?.name}>
                  <TableCell component="th" scope="row">
                    {row?.name}
                  </TableCell>
                  <TableCell align="right">{row?.description}</TableCell>
                  <TableCell align="right">{row?.price}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="primary" onClick={() => history.push(`/product/${row.id}`)}>
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableWrapper>
    </Container>
  )
}

export default ProductList;