const fs = require('fs');

let listadoPorHacer = [];

// Alamacena la tarea en un archivo json
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error(console.log('No se pudo grabar', err));
    })
}

// Cargar BD
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

// Crear una tarea 
const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: 'false'
    };

    listadoPorHacer.push(porHacer)
    guardarDB();
    return porHacer;
}

// Listar
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

// Actualizar
const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

// Borrar
const borrar = (descripcion) => {
    cargarDB();
    const nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
        /* return nuevoListado; */
    });
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

// Listar las tareas completadas o no completadas
const completado = (estado) => {
    cargarDB();
    const nuevoListado = listadoPorHacer.filter(tarea => tarea.completado === estado);
    return nuevoListado;
}

// Validar si es true ó false
/* const validarColorEstado = () => {
    if (tarea.completado === 'true') {
        tarea = tarea.completado.blue
    } else if (tarea.completado === 'false') {
        tarea = tarea.completado.yellow
    }
    return tarea;
} */


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    completado
}

/*
-----------------------
Comentarios Importantes
-----------------------

1. Al querer cargar un archivo json vacio, va tirar un error, esto debido
a que para que un formato json sea valido tiene que estar entre corchetes []
para resolver el problema le indicamos que en caso que haya un error cree un
arreglo vacio.

*/
