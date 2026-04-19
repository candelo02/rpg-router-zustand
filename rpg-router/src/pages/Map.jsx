import world from "../data/world.json";
import { useGameStore } from "../store/useGameStore";

export default function Game() {
  const { currentLocationId, move } = useGameStore();
  const room = world.find(r => r.id === currentLocationId);

  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg text-center">
      <h1 className="text-3xl font-bold">{room.nombre}</h1>
      <p className="mt-2">{room.descripcion}</p>

      <div className="grid grid-cols-3 gap-2 mt-6 w-40 mx-auto">
        <button
          onClick={() => move("norte")}
          disabled={!room.direcciones.norte}
          className="col-span-3 p-2 border rounded"
        >
          N
        </button>

        <button
          onClick={() => move("oeste")}
          disabled={!room.direcciones.oeste}
          className="p-2 border rounded"
        >
          O
        </button>

        <button
          onClick={() => move("sur")}
          disabled={!room.direcciones.sur}
          className="p-2 border rounded"
        >
          S
        </button>

        <button
          onClick={() => move("este")}
          disabled={!room.direcciones.este}
          className="p-2 border rounded"
        >
          E
        </button>
      </div>
    </div>
  );
}