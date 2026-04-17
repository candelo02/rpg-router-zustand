import world from "../data/world.json";
import { useGameStore } from "../store/useGameStore";

export default function Map() {
  const currentLocationId = useGameStore(state => state.currentLocationId);

  return (
    <div className="p-6">
      {world.map(room => (
        <div
          key={room.id}
          className={`p-3 border mb-2 ${
            room.id === currentLocationId ? "bg-green-300" : ""
          }`}
        >
          {room.nombre} {room.id === currentLocationId && "🚩"}
        </div>
      ))}
    </div>
  );
}