import pool from "../Database/Datacon.js";
export default class product{
     constructor(id,Product,Price){
        this.id=id
        this.Product=Product
        this.Price=Price
     }


addproduct(){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(!err){
            let sql="insert into products(product,price) values(?,?);"
             con.query(sql,[this.Product , this.Price],(err,result)=>{
                con.release();
                if(!err){
                    resolve(result)
                }
                else{
                    reject(err);
                }
             })
            }

             else{
                reject(err);
            }
        })
    })
}

viewproduct(){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(!err){
              let sql="select * from products";
             con.query(sql,[this.Product , this.Price],(err,result)=>{
                con.release();
                if(!err){
                    resolve(result)
                }
                else{
                    reject(err);
                }
             })
            }
             else{
                reject(err);
            }
        })
    })
}
static Delete(id) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, con) => {
            if (!err) {
                let sql = "DELETE FROM products WHERE id = ? "
                // console.log(id);
                con.query(sql, [id], (err, result) => {
                    con.release();
                    if (!err) {
                        
                        resolve(result);
                    } else {
                        reject(err);
                    }
                });
            } else {
                reject(err);
            }
        });
    });
}   

static EditProduct(id,Product,Price) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, con) => {
            if (!err) {
                let sql = "UPDATE products SET Product = ?, Price = ? WHERE id = ?"
                 console.log(Product,Price);
                con.query(sql, [Product ,Price,id], (err, result) => {
                    con.release();
                    if (!err) {
                        
                        resolve(result);
                    } else {
                        reject(err);
                    }
                });
            } else {
                reject(err);
            }
        });
    });
}

static EditAction(id) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, con) => {
            if (!err) {
                let sql = "select * from products where id = ?"
                con.query(sql, [id], (err, result) => {
                    console.log(result)
                    con.release();
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(err);
                    }
                });
            } else {
                reject(err);
            }
        });
    });
}

}