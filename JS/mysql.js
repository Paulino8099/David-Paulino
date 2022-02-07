
const mysql = require("mysql");

class Contacto {
    constructor(oConfig) {
        this.oConfig = oConfig;
    }
    agregarUsuarios(name, email) {
        var con = mysql.createConnection(this.oConfig);
        con.connect(function (error) {
            try {
                if (error) {
                    console.log('Error al establecer la conexión con la BD -- ' + error);
                } else {
                    console.log('Conexión exitosa!');
                    con.query('SELECT COUNT(*) AS USUARIO FROM direct_message', function (error, res, campo) {
                        if (error){
                            console.log('Error en SELECT BD -- ', console.error());
                        } else {
                            
                        }
                    });
                }
            } catch (x) {
                console.log('Contacto.agregarUsuarios.connect --error-- ' + x);
            }
        });
    }
}

module.exports = Contacto;
// creando conexión con la BD "mysql"
const conection = mysql.createConnection({
    host: "localhost",
    user: "Deyvi",
    password: "",
    database: "desarrollo"
});

