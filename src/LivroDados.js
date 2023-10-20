import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

const LivroDados = () => {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const history = useHistory();

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event) => {
    event.preventDefault();

    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split("\n"),
      codEditora,
    };

    console.log("Livro a ser incluído:", livro);

    controleLivro.incluir(livro);
    console.log("Livro incluído com sucesso!");
    history.push("/");
  };

  return (
    <main>
      <h1>Cadastrar Novo Livro</h1>
      <form onSubmit={incluir}>
        <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Resumo:</label>
          <textarea
            className="form-control"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Editora:</label>
          <select
            className="form-control"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Autores (um por linha):</label>
          <textarea
            className="form-control"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
          />
        </div>

        <hr />
        <button type="submit" className="btn btn-primary">
          Incluir Livro
        </button>
      </form>
    </main>
  );
};

export default LivroDados;
