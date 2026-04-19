import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Game from "../pages/Game";
import Map from "../pages/Map";
import { useGameStore } from "../store/useGameStore";
import Layout from "../components/Layout";

const ProtectedRoute = ({ children }) => {
  const playerName = useGameStore(state => state.playerName);
  return playerName ? children : <Navigate to="/" />;
};

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/game"
          element={
            <ProtectedRoute>
              <Layout>
                <Game />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/map"
          element={
            <ProtectedRoute>
              <Map />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}