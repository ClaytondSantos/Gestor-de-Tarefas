const db = require("../config/db");


exports.listarTarefas = async () => {
  const result = await db.query("SELECT * FROM tarefas ORDER by id ASC");
  return(result.rows);
};
exports.criarTarefas = async ({nome, descricao, concluida}) => {
    const result = await db.query("INSERT INTO tarefas (nome,descricao,concluida) VALUES($1,$2,$3) RETURNING *",
        [nome,descricao,concluida]);
    return (result.rows[0]);
};
exports.atualizarTarefa = async (id,{nome, descricao, concluida}) =>{
    const result = await db.query("UPDATE tarefas SET nome = $1, descricao = $2, concluida = $3 WHERE id = $4 RETURNING *",
        [nome,descricao,concluida,id]);
    return result.rows[0];
};
exports.eliminarTarefa = async (id) => {
    const result = await db.query("DELETE FROM tarefas WHERE id=$1 RETURNING *",[id]);
    return result.rows[0];
};
