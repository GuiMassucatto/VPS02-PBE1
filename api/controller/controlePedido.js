const pedido = require('../dados/PedidoModel');

exports.listarPedido = (req, res) => {
    pedido.getAllPedidos((err, results) => {
        if (err) return res.status(500).send({ message: 'Erro ao listar pedidos.' });
        res.status(200).send(results);
    });
};

exports.criarPedido = (req, res) => {
    const novoPedido = {
        idcliente: req.body.idcliente,
        idprod: req.body.idprod,
        idtelefone: req.body.idtelefone,
        datalancamento: req.body.datalancamento,
        total: req.body.total
      };

    pedido.createPedido(novoPedido, (err, pedido) => {
        if (err) return res.status(500).send({ message: 'Erro ao salvar Pedido.' });
        res.status(201).send(pedido);
    });
};

exports.atualizarPedido = (req, res) => {
    const { id } = req.params;
    const pedidoAtualizado = req.body;

    pedido.updatePedido(id, pedidoAtualizado, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Pedido atualizado com sucesso' });
    });
};

exports.deletarPedido = (req, res) => {
    const { id } = req.params;

    pedido.deletePedido(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        
        res.json({ message: 'Pedido deletado com sucesso' });
    });
};