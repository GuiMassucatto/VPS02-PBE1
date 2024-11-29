const connect = require('../connect/connect');

const getAllPedidos = (callback) => {
    connect.query('SELECT * FROM pedidos', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

const createPedido = (data, callback) => {
    connect.query('INSERT INTO pedidos SET ?', data, (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, ...data });  
    });
};

const updatePedido = (id, data, callback) => {
    connect.query('UPDATE pedidos SET ? WHERE idpedido = ?', [data, id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Pedido atualizado com sucesso' });
    });
};

const deletePedido = (id, callback) => {
    connect.query('DELETE FROM pedidos WHERE idpedido = ?', [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Pedido deletado com sucesso' });
    });
};

module.exports = {
    getAllPedidos,
    createPedido,
    updatePedido,
    deletePedido
};