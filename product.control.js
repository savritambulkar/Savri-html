import { response } from "express";
import products from "../model/product.js";
export const productitem = (request, response, next) => {
    response.render("addproduct.ejs");
};
export const productAction =(request,response,next)=>{
     let {product,price} = request.body;
        let Product = new products(null,product,price); 
        Product.addproduct()
        .then(result=>{

            response.redirect("/product/viewproduct");
            
        }).catch(err=>{
          console.log(err);
          response.end('productAction of product.controller not working')
        });
    }

export const viewproduct =(request,response,next)=>{
      let {product,price} = request.body;
         let Product = new products(null,product,price); 
         Product.viewproduct()
         .then(result=>{
             response.render("viewproduct.ejs",{Product:result});
           }).catch(err=>{
           console.log(err);
           response.end();
         });
     }
     export const Delete =(request,response,next)=>{
      console.log(request.params.id);
      let Pid = request.params.id;
       products.Delete(Pid)
         .then(result=>{
             response.redirect("/product/viewproduct");
           }).catch(err=>{
           console.log(err);
           response.end();
         });
     }

     export const EditProduct=(request,response,next)=>{
       let {id,Product ,Price}=request.body;
       products.EditProduct(id,Product,Price)
       .then(result=>{
        response.redirect("/product/viewproduct");
        }).catch(err=>{
          console.log(err)
        response.end()
      })
    }
    export const EditAction = async (request,response,next)=>{
      try{ 
       let productid = request.params.id;
       let result  = await products.EditAction(productid);
       console.log(result[0]);
       return response.render("Updateproduct.ejs",{product: result[0]});
      }
      catch(err){
       console.log(err);
      }
   }
     

     
     
     
