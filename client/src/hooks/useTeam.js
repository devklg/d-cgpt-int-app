// client/src/hooks/useTeam.js
import { useContext } from "react";
import { TeamDataContext } from "../contexts/TeamDataContext";

export const useTeam = () => {
  const context = useContext(TeamDataContext);
  if (!context) {
    throw new Error("useTeam must be used within a TeamDataProvider");
  }
  return context;
};

