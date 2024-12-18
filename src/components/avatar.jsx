import { useState } from "react";

import Playmobil from "./models/playmobil.jsx";
import Kiki from "./models/kiki.jsx";

export default function Avatar({ avatarID }) {
  const [questionId, setQuestionId] = useState(null);

  return (
    <>
      {avatarID === 1 && <Playmobil />}
      {avatarID === 2 && <Playmobil />}
      {avatarID === 3 && <Kiki />}
    </>
  );
}
