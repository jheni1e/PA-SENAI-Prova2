import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [user, setUsers] = useState([]);
  const [endereco, setEndereco] = useState("");
  const [habilidades, setHabilidades] = useState("");
  const [projetos, setProjetos] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("https://avaliacao-bosch.onrender.com/usuario");
    setUsers(response.data);
    setEndereco(response.data.endereco);
    setHabilidades(response.data.habilidades);
    setProjetos(response.data.projetos);
  }

  return (
    <>
      <div className="flex justify-around flex-row bg-gray-200 p-7 w-250">
        <div className="flex flex-col text-left">
          <h2 className="mt-5 mb-6 text-6xl font-bold">{user.nome}</h2>
          <p className="mb-2 text-2xl"><strong>Idade:</strong> {user.idade}</p>
          <p className="mb-2 text-2xl"><strong>Email:</strong> {user.email}</p>
          <p className="mb-2 text-2xl"><strong>Endereço:</strong> {endereco.rua}, {endereco.numero} <br />
            {endereco.cidade} — {endereco.estado}</p>
          <p className="mb-2 text-2xl"><strong>Stacks: </strong> {habilidades[0]}, {habilidades[1]}<br />
            {habilidades[2]}, {habilidades[3]}</p>
        </div>
        <div className="flex flex-col text-left ml-20">
          <h2 className="mt-5 mb-6 text-5xl font-bold">Projetos</h2>
          <p className="mb-2 text-2xl"><strong>{projetos[0].id}. {projetos[0].nome}</strong><br />Status: {projetos[0].status}</p>
          <p className="mb-2 text-2xl"><strong>{projetos[1].id}. {projetos[1].nome}</strong><br />Status: {projetos[1].status}</p>
          <p className="mb-2 text-2xl"><strong>{projetos[2].id}. {projetos[2].nome}</strong><br />Status: {projetos[2].status}</p>
        </div>
      </div>
    </>
  )
}

export default App
