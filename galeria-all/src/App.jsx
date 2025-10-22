import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const response = await axios.get("https://avaliacao-bosch.onrender.com/all");
    setCards(response.data);
    console.log(response.data)
  }

  return (
    <>
      <h1 className="font-extrabold text-9xl mt-10">Meninas da DTA 3</h1>
      <ul className="grid grid-cols-3 mt-10">
        {cards.map(card => (
          <li
            key={card.id}
            className="flex flex-col justify-center items-center m-5 w-100 p-3 hover:shadow-lg hover:bg-gray-200 ring ring-gray-300">
            <h3 className="font-bold text-2xl mr-5">{card.id}. {card.nome} {card.sobrenome}</h3>
            <div className="flex flex-row items-center">
              <h3 className="font-bold text-lg">Status:</h3>
              {card.status === "Matriculado" &&
                <div className="w-5 h-5 rounded-xl bg-emerald-600 ml-5" />}
              {card.status != "Matriculado" &&
                <div className="w-5 h-5 rounded-xl bg-red-600 ml-5" />}
            </div>
            <p className="mt-2 mb-2 text-lg">Personagem favorito da {card.apelido ? card.apelido : card.nome}:</p>
            <img src={card.imagem} className="h-50 w-60 flex self-center shadow-2xl" />

          </li>
        ))}
      </ul>
    </>
  )
}

export default App
