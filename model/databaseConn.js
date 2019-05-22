var mysql = ('mysql');

var conndb = {
    getConnection: function(){
        var cnct = mysql.createFunction({
            host: "localhost",
            user: "root",
            password: "",
            database: "api"
        }) 
        return cnct;
    }
}

module.exports = conndb