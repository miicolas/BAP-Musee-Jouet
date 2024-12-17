import { useState } from "react";

import Playmobil from "./models/playmobil.jsx";
import Kiki from "./models/kiki.jsx";

export default function Avatar({ avatarID }) {
  const [questionId, setQuestionId] = useState(null);

  const avatars = [
    {
      id: 1,
      name: "Playmobil",
    },
    {
      id: 2,
      name: "Sophie la girafe",
    },
    {
      id: 3,
      name: "Kiki",
    },
  ];

  const avatar = avatars.find((avatar) => avatar.id === avatarID);

  return (
    <>
      {avatarID === 1 && <Playmobil />}
      {avatarID === 2 && <Playmobil />}
      {avatarID === 3 && <Kiki />}
    </>
  );
}
