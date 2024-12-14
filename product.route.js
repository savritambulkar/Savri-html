import express from "express";
import { productitem ,productAction ,viewproduct, Delete, EditProduct, EditAction } from "../controller/product.control.js";
import {verify} from "../middileware/authontication.js"

const product = express.Router();

product.get("/addproduct",verify,productitem);
product.post("/addproduct",verify,productAction);
product.get("/viewproduct",verify,viewproduct);
product.get("/delete/:id",verify,Delete)
product.post("/EditProduct", verify,EditProduct)
product.get("/EditAction/:id",verify,EditAction)

export default product;