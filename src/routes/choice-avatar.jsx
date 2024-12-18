import { useState, useEffect } from "react";
import { avatars } from "../lib/utils";
import CardAvatar from "../components/cards/card-avatar.jsx";
import Layout from "../layout";
import "../assets/css/card.css";
import socketSingleton from "../lib/socket-singleton";

export default function ChoiceAvatar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(socketSingleton);
    if (socket) {
      socket.emit("avatar", null);
      socket.emit("question", null);
    }
  }, [socket]);

  const handlePrevious = () => {
    const prevIndex =
      currentIndex === 0 ? avatars.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex === avatars.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <Layout>
      <div className="choice-avatar-page relative h-screen">
        <h1 className="mx-auto">Choisissez votre Avatar</h1>
        <div className="container">
          {avatars.map((avatar, index) => (
            <input
              key={avatar.id}
              type="radio"
              name="slider"
              id={`item-${avatar.id}`}
              checked={index === currentIndex}
              readOnly
              style={{ display: "none" }}
            />
          ))}

          <div className="cards">
            {avatars.map((person, index) => (
              <CardAvatar
                key={person.id}
                person={person}
                isSelected={index === currentIndex}
              />
            ))}
          </div>
        </div>

        <div className="navigation-buttons">
          <button onClick={handlePrevious}>Précédent</button>
          <button onClick={handleNext}>Suivant</button>
        </div>
      </div>
    </Layout>
  );
}
