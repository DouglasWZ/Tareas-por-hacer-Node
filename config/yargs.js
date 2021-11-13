// Importacione
const argv = require('yargs')

    // Configuracion de los comandos
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'actualiza el estado completado de una', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'borra una tarea pendiente', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por borrar'
        }
    })
    .command('listar', 'Lista todas las tareas por hacer', {
        listar: {
            desc: 'muestra todas las tareas'
        }
    })
    .command('completado', 'lista todas las tareas de acuerdo a la condicion', {
        completado: {
            demand: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .help()
    .argv;

// Exportamos el modulo
module.exports = {
    argv
}