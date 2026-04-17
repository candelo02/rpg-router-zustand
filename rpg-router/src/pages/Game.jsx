import world from "../data/world.json";
import { useGameStore } from "../store/useGameStore";

export default function Game() {
  const { currentLocationId, move } = useGameStore();

  const room = world.find(r => r.id === currentLocationId);

  return (
    <div className="p-6">
      <h1 className="text-2xl">{room.nombre}</h1>
      <p>{room.descripcion}</p>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {["norte", "sur", "este", "oeste"].map(dir => (
          <button
            key={dir}
            disabled={!room.direcciones[dir]}
            onClick={() => move(dir)}
            className="bg-gray-700 text-white p-2 disabled:opacity-30"
          >
            {dir}
          </button>
        ))}
      </div>
    </div>
  );
}