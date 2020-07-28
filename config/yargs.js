const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Cambia el estado de la tarea'
}

const { argv } = require('yargs')
    .command('crear', 'Crear una tarea', { descripcion, completado })
    .command('actualizar', 'Actualiza el estado de la tarea o su descripción', { descripcion, completado })
    .command('borrar', 'Borra una tarea', { descripcion })
    .help();

module.exports = {
    argv
}