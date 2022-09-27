import React,{useState,useEffect} from 'react'
import {useDispatch} from "react-redux"
import {add} from "../store/cartSlice"

const Products = () => {
    const Dispatch=useDispatch()

    const [products,setProducts]=useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        // fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(res=>{setProducts(res)})
        console.log(products)
    })

    const handleAdd = (product) => {
            Dispatch(add(product))
    }


  return (
    <div className="productsWrapper">
      {products.map(product=>(
        <div className="card" key={product.id}>
            <img className="img" src={product.image} alt=""/>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className="btn" onClick={()=>{handleAdd(product)}}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default Products
