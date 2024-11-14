import { Link } from "react-router-dom";
import { useState } from "react";
import { avatars } from "../lib/utils";
import CardAvatar from "../components/card-avatar";
import Layout from "../layout";

export default function ChoiceAvatar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === avatars.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? avatars.length - 1 : prevIndex - 1
    );
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <Link to="/">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Retour
          </button>
        </Link>
        <div className="my-8 bg-gray-500 p-4 rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-white text-center">
            Choisissez votre Avatar
          </h1>
          <div className="relative w-full max-w-md mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {avatars.map((person) => (
                  <div key={person.id} className="flex-shrink-0 w-full">
                    <CardAvatar person={person} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Précédent
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
