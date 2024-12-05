import { useState } from "react";
import { avatars } from "../lib/utils";
import CardAvatar from "../components/card-avatar";
import Layout from "../layout";
import "../assets/css/card.css"; // Styles spécifiques à cette page
import { Link } from "react-router-dom";

export default function ChoiceAvatar() {
  const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre la carte actuellement affichée

  // Gestion du bouton Précédent
  const handlePrevious = () => {
    const prevIndex = currentIndex === 0 ? avatars.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    document.getElementById(`item-${avatars[prevIndex].id}`).checked = true; // Change le bouton radio associé
  };

  // Gestion du bouton Suivant
  const handleNext = () => {
    const nextIndex = currentIndex === avatars.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    document.getElementById(`item-${avatars[nextIndex].id}`).checked = true; // Change le bouton radio associé
  };

  return (
    <Layout>
      <div className="choice-avatar-page">
        {/*<Link to="/">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Retour
          </button>
        </Link>*/}
        <h1>Choisissez votre Avatar</h1>
        <div className="container">
          {/* Boutons radio pour contrôler l'animation */}
          {avatars.map((avatar) => (
            <input
              key={avatar.id}
              type="radio"
              name="slider"
              id={`item-${avatar.id}`}
              defaultChecked={avatar.id === avatars[0].id}
              style={{ display: "none" }} // Masquer complètement les boutons radio
            />
          ))}

          {/* Cartes d'avatars */}
          <div className="cards">
            {avatars.map((person, index) => (
              <CardAvatar key={person.id} person={person} isSelected={index === currentIndex} />
            ))}
          </div>
        </div>

        {/* Boutons Suivant et Précédent */}
        <div className="navigation-buttons">
          <button
            onClick={handlePrevious}
            
          >
            Précédent
          </button>
          <button
            onClick={handleNext}
            
          >
            Suivant
          </button>
        </div>
      </div>
    </Layout>
  );
}
