const { argv } = require('./config/yargs');
const { crear, getLista, actualizar, borrar } = require('./por-hacer/por-hacer');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        let lista = getLista();
        if (lista.length === 0) {
            console.log('============================================================='.gray);
            console.log('\t\t\tNo hay nada por hacer'.blue);
            console.log('============================================================='.gray);
        } else {
            console.log('============================================================='.gray);
            console.log('\t\t\tPor hacer'.blue);
            console.log('=============================================================\n'.gray);
            for (let tarea of lista) {
                console.log('Descripción: '.cyan + tarea.descripcion);
                console.log('Estado: '.cyan + (tarea.completado ? 'Hecho\n'.green : 'Incompleto\n'.red));
                console.log('--------------------------------------------\n')
            }
        }
        break;
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log('\n============================================================='.gray);
        console.log('\t\t\tTarea agregada'.green);
        console.log('============================================================='.gray);
        console.log('\nDescripción: '.cyan + tarea.descripcion);
        console.log('Estado: '.cyan + (tarea.estado ? 'Completado\n' : 'Incompleto\n'));
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado)
        if (actualizado) {
            console.log('============================================================='.gray);
            console.log('\tLa tarea se actualizo correctamente'.green);
            console.log('============================================================='.grey);
        } else {
            console.log('============================================================='.gray);
            console.log('\t\t\tError'.red);
            console.log('============================================================='.grey);
        }

        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion)
        if (borrado) {
            console.log('============================================================='.gray);
            console.log('\tLa tarea se ha eliminado'.green);
            console.log('============================================================='.grey);
        } else {
            console.log('============================================================='.gray);
            console.log('\t\t\tError'.red);
            console.log('============================================================='.grey);
        }
        break;

    default:
        console.log('Comando no reconocido');
}