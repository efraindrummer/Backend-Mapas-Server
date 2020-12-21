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
            //marcadores activos
            socket.emit('marcadores-activos', this.marcadores.activos);
            //marcadores nuevos
            socket.on('marcador-nuevo', (marcador) => {
                this.marcadores.agregarMarcador(marcador);
                socket.broadcast.emit('marcador-nuevo', marcador);
            });
            //actualizar el marcador cuando se mueve
            socket.on('marcador-actualizado', (marcador) => {
                this.marcadores.actualizarMarcador(marcador);
                socket.broadcast.emit('marcador-actualizado', marcador);
            });
        });
    }


}


module.exports = Sockets;