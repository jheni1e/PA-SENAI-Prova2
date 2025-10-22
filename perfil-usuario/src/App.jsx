import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [user, setUsers] = useState([]);
  const [endereco, setEndereco] = useState("");

  useEffect(() => {
    getUsers();
    getEndereco();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("https://avaliacao-bosch.onrender.com/usuario");
    setUsers(response.data);
  }

  const getEndereco = () => {
    setEndereco(`${user.endereco.rua}, ${user.endereco.numero} — ${user.endereco.cidade}, ${user.endereco.estado}`)
  }

  // console.log(user.endereco.rua)
  // console.log(user.endereco.cidade)
  // console.log(user.habilidades[0])
  // console.log(user.habilidades[1])
  // console.log(user.habilidades[2])
  // console.log(user.habilidades[3])

  return (
    <>
      <div className="flex justify-center flex-row bg-gray-200 p-7">
        <div className="flex flex-col text-left">
          <h2 className="mt-5 mb-5 text-6xl font-bold">{user.nome}</h2>
          <p className="mb-2 text-2xl"><strong>Idade:</strong> {user.idade}</p>
          <p className="mb-2 text-2xl"><strong>Email:</strong> {user.email}</p>
          <p className="mb-2 text-2xl"><strong>Endereço:</strong> {endereco}</p>
          {/* <p className="mb-2 text-2xl"><strong>Stacks: </strong> {user.habilidades[0]}, {user.habilidades[1]} <br />
          {user.habilidades[2]}, {user.habilidades[3]}</p> */}
          {/* <ul>
            {user.habilidades.map(item, index => (
              <li
                className="text-lg m-2 mb-2 cursor-pointer">
                {user.habilidades[index]}
              </li>
            ))}
          </ul> */}
        </div>
        <div className="flex flex-col text-left">
          <h2 className="ml-10 mt-5 mb-5 text-5xl font-bold">Projetos</h2>
        </div>
      </div>
    </>
  )
}

export default App
