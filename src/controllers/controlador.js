const { Pool } = require('pg');
//Pool = conjuto de conexiones que puedo utilizar

const pool = new Pool ({
    host:'localhost',
    user:'postgres',
    password:'',
    database: 'mascotasapi',
    port: '5432'
});


const mascotas = async (req,res)=>{
    const consultita = await pool.query('SELECT * FROM mascotas');
    res.status(200).json(consultita.rows);
    res.send('mascototas');
}

const unaMascota = async (req,res) =>{
    const id = req.params.id;
    const consultirigilla = await pool.query('SELECT * FROM mascotas where id=$1',[id])
    res.json(consultirigilla.rows);
}

const borrarMascota = async (req,res) =>{
    const id = req.params.id;
    const consultirigilla = await pool.query('DELETE  FROM mascotas where id=$1',[id])
    // res.json(consultirigilla.rows);
    res.json(`la mascota ${id} a pasado a mejor vida`)
}

const actualizarMascota = async (req,res) =>{
    const id = req.params.id;
    const { nombre,edad,raza } = req.body;
    const sueño = await pool.query('UPDATE mascotas SET nombre=$1,edad=$2,raza=$3 WHERE id=$4',[
        nombre,
        edad,
        raza,
        id
    ])
    console.log(sueño);
    res.json({
        message:'Mascota cheteada a tope papá'
    })
    
}



const crearMascota = async (req,res)=>{
    const {nombre,edad,raza} = req.body;
    const consulta = await pool.query('INSERT INTO mascotas (nombre,edad,raza) VALUES ($1,$2,$3)',[nombre,edad,raza])
    console.log(consulta);
    res.json({
        message: 'Mascota NacionalSocialista ready',
        body:{
            mascota:{nombre,edad,raza}
        }
    })
}

module.exports = {
    mascotas,
    unaMascota,
    borrarMascota,
    actualizarMascota,
    crearMascota
}