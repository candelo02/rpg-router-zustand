import { create } from "zustand";
import world from "../data/world.json";

export const useGameStore = create((set, get) => ({
  playerName: "",
  currentLocationId: "entrada",

  setPlayerName: (name) => set({ playerName: name }),

  move: (direction) => {
    const { currentLocationId } = get();
    const currentRoom = world.find(r => r.id === currentLocationId);

    const nextRoom = currentRoom.direcciones[direction];

    if (nextRoom) {
      set({ currentLocationId: nextRoom });
    }
  }
}));