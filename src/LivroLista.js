import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const controleLivro = new ControleLivros();
    const obterLivrosAsync = async () => {
      try {
        const livrosObtidos = await controleLivro.obterLivros();
        setLivros(livrosObtidos);
        setCarregado(true);
      } catch (error) {
        console.error(error);
      }
    };

    obterLivrosAsync();
  }, [carregado]);

  const excluirLivro = (codigo) => {
    const controleLivro = new ControleLivros();

    controleLivro
      .excluir(codigo)
      .then((result) => {
        if (result) {
          setCarregado(false);
        } else {
          console.error("Falha ao excluir o livro.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const LinhaLivro = ({ livro, index }) => {
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
      <tr key={index}>
        <td>
          {livro.titulo} <br />
          <button
            className="btn btn-danger"
            onClick={() => excluirLivro(livro.codigo)}
          >
            Excluir
          </button>
        </td>
        <td>{livro.resumo}</td>
        <td>{nomeEditora}</td>
        <td>
          {livro.autores.map((autor, autorIndex) => (
            <li key={autorIndex}>{autor}</li>
          ))}
        </td>
      </tr>
    );
  };

  return (
    <main className="container">
      <h1 className="my-4">Catálogo de Livros</h1>
      {carregado && (
        <table className="table table-striped ">
          <thead>
            <tr className="table-dark">
              <th>Título</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, index) => (
              <LinhaLivro key={index} livro={livro} index={index} />
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default LivroLista;
