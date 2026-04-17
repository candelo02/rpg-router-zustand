import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGameStore } from "../store/useGameStore";

export default function Home() {
  const [name, setName] = useState("");
  const setPlayerName = useGameStore(state => state.setPlayerName);
  const navigate = useNavigate();

  const start = () => {
    setPlayerName(name);
    navigate("/game");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        className="border p-2"
        placeholder="Tu nombre"
        onChange={(e) => setName(e.target.value)}
      />
      <button className="mt-4 bg-blue-500 text-white p-2" onClick={start}>
        Comenzar
      </button>
    </div>
  );
}