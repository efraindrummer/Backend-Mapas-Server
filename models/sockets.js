const Marcadores = require("./marcadores");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.marcadores = new Marcadores();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('cliente conectado');
            //marcadores activos

            //marcadores nuevos

            //actualizar el marcador cuando se mueve
        });
    }


}


module.exports = Sockets;