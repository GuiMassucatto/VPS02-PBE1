const produto = require('../dados/ProdutoModel');

exports.listarProduto = (req, res) => {
    produto.getAllProdutos((err, results) => {
        if (err) return res.status(500).send({ message: 'Erro ao listar produtos.' });
        res.status(200).send(results);
    });
};

exports.criarProduto = (req, res) => {
    const novoProduto = {
        descricao: req.body.descricao,
        preco: req.body.preco,
        nome: req.body.nome,
        validade: req.body.validade,
        idforn: req.body.idforn
      };

    produto.createProduto(novoProduto, (err, produto) => {
        if (err) return res.status(500).send({ message: 'Erro ao salvar Produto.' });
        res.status(201).send(produto);
    });
};

exports.atualizarProduto = (req, res) => {
    const { id } = req.params;
    const produtoAtualizado = req.body;

    produto.updateProduto(id, produtoAtualizado, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Produto atualizado com sucesso' });
    });
};

exports.deletarProduto = (req, res) => {
    const { id } = req.params;

    produto.deleteProduto(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        
        res.json({ message: 'Produto deletado com sucesso' });
    });
};