const TarefasModel = require("../models/tarefasModel");

exports.listar = async (req,res) => {
  try{
  const tarefas = await TarefasModel.listarTarefas();
  res.json(tarefas);
  }catch(error){
    console.error(error)
    res.status(500).json({message: "Erro ao listar tarefas"});
  }
};
exports.criar = async (req,res) => {
  try {
    const novaTarefa = await TarefasModel.criarTarefas(req.body);
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(500).json({error: "erro ao criar uma tarefa"});
  }
};

exports.atualizar = async (req,res) =>{
  try{
    const tarefasAtualizada = await TarefasModel.atualizarTarefa(req.params.id, req.body);
    if (!tarefasAtualizada)
      return res.status(404).json({message: "Tarefa não encontrada"});
    res.json(tarefasAtualizada);
  }catch{
    res.status(500).json({message: "Erro ao atualizar tarefa"});
  }
};
exports.eliminar = async (req,res) => {
  try {
    const tarefasDeletada = await TarefasModel.eliminarTarefa(req.params.id);
    if(!tarefasDeletada)
      return res.status(404).json({message: "Tarefa não encontrada"});
    res.status(200).json({message: "Tarefa deletada com sucesso"});    
  } catch (error) {
    res.status(500).json({message: "Erro ao deletar tarefa"});
  }
};
