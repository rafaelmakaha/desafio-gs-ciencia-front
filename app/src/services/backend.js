import { BACKEND } from '../settings/endpoints'
import { validFetch } from '../utils'

const common_header = {
  "Content-Type": "application/json"
}

export const getAllProducts = () => {
  const url = BACKEND.baseRoute + BACKEND.product.list.route;
  const method = BACKEND.product.list.method;
  new Promise((resolve,reject)=>{
    setTimeout( () => {
      resolve()
    }, 2000)
  })
  return new Promise((resolve, reject) => {
    fetch(url, { method, headers: common_header })
    .then(validFetch)
    .then(resolve)
    .catch(reject)
  })
}

export const createProduct = (product) => {
  const url = BACKEND.baseRoute + BACKEND.product.create.route;
  const method = BACKEND.product.create.method;
  return new Promise((resolve, reject) => {
    fetch(url,{
      method,
      headers: common_header,
      body: JSON.stringify(product)
    })
    .then(validFetch)
    .then(resolve)
    .catch(reject)
  })
}


export const getProductById = ({id}) => {
  const url = BACKEND.baseRoute + BACKEND.product.getOne.route(id);
  const method = BACKEND.product.getOne.method;
  return new Promise((resolve, reject) => {
    fetch(url,{ method, headers: common_header })
    .then(validFetch)
    .then(resolve)
    .catch(reject)
  })
}

export const deleteProductById = (id) => {
  const url = BACKEND.baseRoute + BACKEND.product.delete.route(id);
  const method = BACKEND.product.delete.method;
  new Promise((resolve,reject)=>{
    setTimeout( () => {
      resolve()
    }, 2000)
  })
  return new Promise((resolve, reject) => {
    fetch(url,{ method, headers: common_header })
    .then(resolve)
    .catch(reject)
  })
}

export const updateProduct = (id, product) => {
  const url = BACKEND.baseRoute + BACKEND.product.update.route(id);
  const method = BACKEND.product.update.method;
  return new Promise((resolve, reject) => {
    fetch(url,{
      method,
      headers: common_header,
      body: JSON.stringify(product)
    })
    .then(validFetch)
    .then(resolve)
    .catch(reject)
  })
}
