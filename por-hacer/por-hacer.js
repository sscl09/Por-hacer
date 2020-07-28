const fs = require('fs');
let listaPorHacer = [];

const guardar = () => {
    let data = JSON.stringify(listaPorHacer);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
    });
}

const carga = () => {
    try {
        listaPorHacer = require('../db/data.json');
    } catch (error) {
        listaPorHacer = [];
    }

}

const crear = (descripcion) => {
    carga();
    let porHacer = {
        descripcion,
        completado: false
    };
    listaPorHacer.push(porHacer);
    guardar();
    return porHacer;
}

const getLista = () => {
    carga();
    return listaPorHacer;
}


const actualizar = (descripcion, completado = true) => {
    carga();
    let index = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listaPorHacer[index].completado = completado === "false" ? false : true
        guardar()
        return true
    } else {
        return false
    }
}

const borrar = (descripcion) => {
    carga();

    let nuevo = listaPorHacer.filter(tarea => tarea.descripcion !== descripcion)


    if (nuevo.length !== listaPorHacer.length) {
        listaPorHacer = nuevo
        guardar()
        return true
    } else {
        return false
    }
}
module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}