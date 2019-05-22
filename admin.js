var db=require('./databaseConfig.js');


var adminDB = {
    getAdmin: function (staffid,callback) { 

        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {           
                console.log(err);
                throw err;
            }
            else{

                console.log("Connected!");
                
                var sql = 'SELECT * FROM admin WHERE staffid = ?';
                
                conn.query(sql, [staffid], function (err,result) {
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

    addAdmin: function (username,email,staffid,password,callback) { 
        
                var conn = db.getConnection();
                conn.connect(function (err) {
                    if (err) {           
                        console.log(err);
                        throw err;
                    }
                    else{
        
                        console.log("Connected!");
                        
                        var sql = 'Insert into admin(username,email,staffid,password) values(?,?,?,?)';
                        
                        conn.query(sql, [username,email,staffid,password], function (err,result) {
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
    warning:function (warning) { 
        console.log('Warning: ' + warning);
    },
 
};

module.exports = adminDB