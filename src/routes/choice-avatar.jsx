import { useState } from "react";
import { avatars } from "../lib/utils";
import CardAvatar from "../components/card-avatar";
import Layout from "../layout";
import "../assets/css/card.css"; // Styles spécifiques à cette page
import { Link } from "react-router-dom"

export default function ChoiceAvatar() {
  const [background, setBackground] = useState(avatars[0].background); // Fond initial

  const handleBackgroundChange = (id) => {
    const selectedAvatar = avatars.find((avatar) => avatar.id === id);
    if (selectedAvatar) {
      setBackground(selectedAvatar.background);
    }
  };

  return (
    <Layout>
      <div
        className="choice-avatar-page"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Link to="/">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Retour
          </button>
        </Link>
        <h1>Sélectionne ton jouet!</h1>
        <div className="container">
          {/* Boutons radio pour sélectionner les cartes */}
          {avatars.map((avatar) => (
            <input
              key={avatar.id}
              type="radio"
              name="slider"
              id={`item-${avatar.id}`}
              defaultChecked={avatar.id === avatars[0].id}
              onChange={() => handleBackgroundChange(avatar.id)}
            />
          ))}

          {/* Cartes d'avatars */}
          <div className="cards">
            {avatars.map((person) => (
              <CardAvatar key={person.id} person={person} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
