import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { questions } from "../lib/utils";
import CardQuestion from "../components/card-question";
import Layout from "../layout";
import useInactivityRedirect from "../lib/use-inactivity-redirect";
import { useEffect, useState } from "react";
import Playmobilquestion2 from "../backgrounds/Playmobilfond2.png";
import Sophiefondquestion from "../backgrounds/Sophiefond.png";
import kikifondquestion from "../backgrounds/kikifond.png";

export default function Questions() {
  const { idavatar } = useParams();
  const avatarId = parseInt(idavatar);
  const avatarData = questions[0].avatars.find(
    (avatar) => avatar.id === avatarId
  );
  const avatarQuestions = avatarData ? avatarData.questions : [];

  const [backgroundColor, setBackgroundColor] = useState("bg-red-500");
  const [borderColor, setBorderColor] = useState("border-red-800");
  const [textColor, setTextColor] = useState("text-white");
  const [newButtonTextcolor, setNewButtonTextcolor] = useState("");
  const [newButtonbgcolor, setNewButtonbgcolor] = useState(""); 
  const [newButtonBorderColor , setnewButtonBorderColor] = useState("");

  useInactivityRedirect(120000);

  useEffect(() => {
    let backgroundImage = "";
    let newBackgroundColor = "";
    let newBorderColor = "";
    let newTextColor = "";
    let newButtonbgcolor = "";
    let newButtonTextcolor = "";
    let newButtonBorderColor = "";

    if (avatarData) {
      switch (avatarData.id) {
        case 1:
          backgroundImage = `url(${Playmobilquestion2})`;
          newBackgroundColor = "bg-customRedTitre";
          newBorderColor = "border-red-600";
          newTextColor = "text-red-900";
          newButtonTextcolor = "text-customRedTextButton";
          newButtonbgcolor = "bg-custom-Redgradient";
          newButtonBorderColor="border-customRedBorder";
          break;
        case 2:
          backgroundImage = `url(${Sophiefondquestion})`;
          newBackgroundColor = "bg-customYellowTitre";
          newBorderColor = "border-yellow-500";
          newTextColor = "text-customYellowTitre";
          newButtonTextcolor = "text-customYellowTexteButton";
          newButtonbgcolor = "bg-amber-300";
          newButtonBorderColor="border-customYellowBorder";
          break;
        case 3:
          backgroundImage = `url(${kikifondquestion})`;
          newBackgroundColor = "bg-customGreenTitre"; 
          newBorderColor = "border-emerald-600";
          newTextColor = "text-customGreenTitre";
          newButtonTextcolor = "text-green-800";
          newButtonbgcolor = "bg-custom-Greengradient";
          newButtonBorderColor="border-customGreenBorder";
          break;
        default:
          newBackgroundColor = "bg-gray-400";
          newBorderColor = "border-gray-700";
          newTextColor = "text-gray-900";
          backgroundImage = "url('/backgrounds/default-avatar.png')";
          newButtonTextcolor = "text-gray-800";
          newButtonbgcolor = "bg-gray-800";
          newButtonBorderColor="border-amber-400";
      }

      document.body.style.backgroundImage = backgroundImage;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";

      setBackgroundColor(newBackgroundColor);
      setBorderColor(newBorderColor);
      setTextColor(newTextColor);
      setNewButtonTextcolor(newButtonTextcolor); 
      setNewButtonbgcolor(newButtonbgcolor);
      setnewButtonBorderColor(newButtonBorderColor);
    }

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, [avatarData]);

  return (
    <Layout>
      <Link to="/choice-avatar">
      <button className={`px-5 py-3 font-bold text-white ${backgroundColor} rounded-full m-6 mb-0`}>
  <FontAwesomeIcon icon={faChevronLeft} size="2x" />
</button>


      </Link>

      <div className="text-center">
        <h1
          className={`m-6  mt-0 text-8xl font-bold  ${textColor} `}
        >
          {avatarData ? avatarData.name : "Avatar introuvable"}
        </h1> 
        <h2 className={`font-bold m-0 mt-0 text-2xl ${textColor}`}>
  Choisis ta question
</h2>


        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {avatarQuestions.length > 0 ? (
            avatarQuestions.map((index) => (
              <CardQuestion
                key={index.id}
                person={index}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                textColor={textColor}
                newButtonbgcolor={newButtonbgcolor}
                newButtonTextcolor={newButtonTextcolor}
                
              />
            ))
          ) : (
            <p>Aucune question trouvée pour cet avatar.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
