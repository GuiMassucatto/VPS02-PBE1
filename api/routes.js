const express = require('express');
const router = express.Router();
const clienteController = require('./controller/controleCliente');
const telefoneController = require('./controller/controleTelefone');
const fornecedorController = require('./controller/controleFornecedor');
const produtoController = require('./controller/controleProduto');
const pedidoController = require('./controller/controlePedido');

router.get('/clientes', clienteController.listarClientes);
router.post('/clientes', clienteController.criarCliente);
router.delete('/clientes/:id', clienteController.deletarCliente);
router.put('/clientes/:id', clienteController.atualizarCliente);

router.post('/telefones', telefoneController.criarTelefone);
router.put('/telefones/:id', telefoneController.atualizarTelefone);
router.get('/telefones', telefoneController.listarTelefones);
router.delete('/telefones/:id', telefoneController.deletarTelefone);

router.post('/fornecedores', fornecedorController.criarFornecedor);
router.put('/fornecedores/:id', fornecedorController.atualizarFornecedor);
router.get('/fornecedores', fornecedorController.listarFornecedor);
router.delete('/fornecedores/:id', fornecedorController.deletarFornecedor);

router.post('/produtos', produtoController.criarProduto);
router.put('/produtos/:id', produtoController.atualizarProduto);
router.get('/produtos', produtoController.listarProduto);
router.delete('/produtos/:id', produtoController.deletarProduto);

router.post('/pedidos', pedidoController.criarPedido);
router.put('/pedidos/:id', pedidoController.atualizarPedido);
router.get('/pedidos', pedidoController.listarPedido);
router.delete('/pedidos/:id', pedidoController.deletarPedido);

module.exports = router;