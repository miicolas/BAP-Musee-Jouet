import Playmobil from "./models/playmobil.jsx";
import Kiki from "./models/kiki.jsx";
import Sophie from "./models/sophie.jsx";

export default function Avatar({ avatarID }) {
  return (
    <>
      {avatarID === 1 && <Playmobil />}
      {avatarID === 2 && <Sophie />}
      {avatarID === 3 && <Kiki />}
    </>
  );
}
