import { Link } from "react-router-dom";
import { useGameStore } from "../store/useGameStore";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const playerName = useGameStore(state => state.playerName);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-yellow-200 dark:bg-gray-800 shadow">
      <div className="flex gap-4">
        <span className="font-bold">Dungeon Navigator</span>
        <Link to="/">Inicio</Link>
        <Link to="/game">Game</Link>
        <Link to="/map">Map</Link>
      </div>

      <div className="flex items-center gap-4">
        <span>Héroe: {playerName || "?"}</span>
        <button onClick={toggleTheme}>🌙</button>
      </div>
    </nav>
  );
}