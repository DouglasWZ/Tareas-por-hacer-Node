// IMPORTACIONES
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        console.log('\n');
        for (let tarea of listado) {
            console.log('====='.red, 'Tarea Por Hacer'.green, '====='.red);
            console.log('Tarea:'.brightMagenta, tarea.descripcion.white);
            /* Valicación de color de estado */
            if (tarea.completado === 'true') {
                tarea = tarea.completado.brightBlue
            } else if (tarea.completado === 'false') {
                tarea = tarea.completado.yellow
            }
            console.log('Estado:'.brightCyan, tarea);
            console.log('==========================='.rainbow);
            console.log('\n');
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    case 'completado':
        /* console.log(argv.completado); */
        let tareaCompletada = porHacer.completado(argv.completado);

        console.log('\n');
        for (let completado of tareaCompletada) {
            console.log('====='.red, 'Tarea Por Hacer'.green, '====='.red);
            console.log('Tarea:'.brightMagenta, completado.descripcion.white);
            /* Valicación de color de estado */
            if (completado.completado === 'true') {
                completado = completado.completado.brightBlue
            } else if (completado.completado === 'false') {
                completado = completado.completado.yellow
            }
            console.log('Estado:'.brightCyan, completado);
            console.log('==========================='.rainbow);
            console.log('\n');
        }
        break;

    default:
        console.log('Comando no reconocido');

}