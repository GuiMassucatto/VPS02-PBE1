const connect = require('../connect/connect');

const getAllProdutos = (callback) => {
    connect.query('SELECT * FROM produtos', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

const createProduto = (data, callback) => {
    connect.query('INSERT INTO produtos SET ?', data, (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, ...data });  
    });
};

const updateProduto = (id, data, callback) => {
    connect.query('UPDATE produtos SET ? WHERE idprod = ?', [data, id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Produto atualizado com sucesso' });
    });
};

const deleteProduto = (id, callback) => {
    connect.query('DELETE FROM produtos WHERE idprod = ?', [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Produto deletado com sucesso' });
    });
};

module.exports = {
    getAllProdutos,
    createProduto,
    updateProduto,
    deleteProduto
};