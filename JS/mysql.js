
const mysql = require("mysql");

const conection = mysql.createConnection({
    host: "localhost",
    user: "Deyvi",
    password: "",
    database: "desarrollo"
});

conection.connect((err) => {
    if (err) throw err;
    console.log('La conexión funciona');
});

conection.query('SELECT * from users', (err, rows) => {
    if (err) throw err;
    console.log('Los datos son estos: ');
    console.log(rows);
});

let insertar = 'INSERT INTO users (id, nombre) VALUES (NULL, "OTRO NOMBRE")';

// insertando valores a la base de datos
conection.query(insertar, (err, rows) => {
    if (err) throw err;
});

conection.query('SELECT * from users', (err, rows) => {
    if (err) throw err;
    console.log('Estos son los resultados de la busqueda en la base de datos:');
    console.log(rows);
});

conection.end();



// function mysqlAge() {


//     const mysql = require("mysql");
//     const { parse } = require("path/posix");

//     class contacto {
//         constructor(oConfig) {
//             this.oConfig = oConfig;
//         }
//         /**
//          * @param {* Recibe un nombre en la base de datos y si no existe lo inserta} 
//          * @param {}
//          */
//         agregarUsuario(nombre, correo) {
//             var con = mysql.createConnection(this.oConfig);
//             con.connect(function (error) {
//                 try {
//                     if (error) {
//                         console.log('error al establecer la conexión a la BD' + error);
//                     } else console.log('Conexión exitosa');
//                     con.query('SELECT COUNT(*) AS USUARIO FROM USUARIOS', function (error, res, campo) {
//                         if (error) {
//                             console.log('Error en select BD -- ' + console.error());
//                         } else {
//                             console.log('Usuarios encontrados: ' + res[0].usuario);
//                             if (parseInt(res[0].usuario == 0)) {
//                                 con.query(`INSERT INTO usuarios (nombre, correo) values('${nombre}','${correo}') `), function (error, res, campo) {
//                                     if (error) {
//                                         console.log('Error en select BD -- ' + console.error());
//                                     } else {
//                                         console.log('Nuevo usuario registrado!')
//                                     }
//                                 }
//                             };
//                         }
//                     });
//                 } catch (x) {
//                     console.log('contacto.agregarUsario.conenct --Error--' + x)
//                 }
//             });
//         }
//     }
// };