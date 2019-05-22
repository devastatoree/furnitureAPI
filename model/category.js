var db=require('../databaseConn.js');


var categoryDB = {
    getCategory: function (callback) { 

        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {           
                console.log(err);
                throw err;
            }
            else{

                console.log("Connected!");
                
                var sql = 'SELECT * FROM category';
                
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

    addCategory: function (name,description,callback) { 
        
                var conn = db.getConnection();
                conn.connect(function (err) {
                    if (err) {           
                        console.log(err);
                        throw err;
                    }
                    else{
        
                        console.log("Connected!");
                        
                        var sql = 'Insert into category(name,description) values(?,?)';
                        
                        conn.query(sql, [name,description], function (err,result) {
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

module.exports = categoryDB