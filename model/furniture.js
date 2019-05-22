var db=require('../databaseConn.js');


var furnitureDB = {
    getFurniture: function (callback) { 

        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {           
                console.log(err);
                throw err;
            }
            else{

                console.log("Connected!");
                
                var sql = 'SELECT f.*,c.name as categoryName FROM furniture f, category c where f.categoryid=c.id';
                
                conn.query(sql,function (err,result) {
                      if (err){
                           console.log(err);
                      }else{
                       
                        
                        console.log(result);
                        return callback(result);
        
                      }
                      conn.end(); 
                });

            }

        });

        
        
    },

    getFurniture: function (id,callback) { 
        
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {           
                console.log(err);
                throw err;
            }
            else{

                console.log("Connected!");
                
                var sql = 'SELECT f.*,c.name as categoryName FROM furniture f, category c where f.categoryid=c.id and f.id=?';
                
                conn.query(sql,[id],function (err,result) {
                      if (err){
                           console.log(err);
                      }else{
                       
                        
                        console.log(result);
                        return callback(result);
        
                      }
                      conn.end(); 
                });

            }

        });

                       
                
    },   
        
    addFurniture: function (name,description,price,quantity,categoryid,pic,callback) { 
        
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {           
                console.log(err);
                throw err;
            }
            else{
        
                console.log("Connected!");
                      
                var sql = 'Insert into furniture(name,description,price,quantity,categoryid,pic) values(?,?,?,?,?,?)';
                        
                conn.query(sql, [name,description,price,quantity,categoryid,pic], function (err,result) {
                    if (err){
                        console.log(err);
                    }else{
                       
                        
                        console.log(result.affectedRows);
                        return callback(result.affectedRows);
                
                    }
                    conn.end(); 
                });
        
            }
        
        });
        
                
                
    },
    updateFurniture: function (name,description,price,quantity,categoryid,pic,id,callback) { 
        
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {           
                console.log(err);
                throw err;
            }
            else{
        
                console.log("Connected!");
                      
                var sql = 'update furniture set name=?,description=?,price=?,quantity=?,categoryid=?,pic=? where id=?';
                        
                conn.query(sql, [name,description,price,quantity,categoryid,pic,id], function (err,result) {
                    if (err){
                        console.log(err);
                    }else{
                       
                        
                        console.log(result.affectedRows);
                        return callback(result.affectedRows);
                
                    }
                    conn.end(); 
                });
        
            }
        
        });                
                
    }
 
};

module.exports = furnitureDB