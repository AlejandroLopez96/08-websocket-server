const socketController = (socket) => {
    console.log('cliente conectado', socket.id)
    // socket.on('event', data => { /* … */ });
    socket.on('disconnect', () => { console.log('cliente desconectado', socket.id) });

    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 123345666;
        callback(id);
        socket.broadcast.emit('enviar-mensaje', payload);
    })
}

module.exports = {
    socketController
}