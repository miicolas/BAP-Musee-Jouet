import { Link, useParams } from "react-router-dom";
import { questions } from "../lib/utils";
import CardQuestion from "../components/cards/card-question.jsx";
import Layout from "../layout";
import useInactivityRedirect from "../lib/use-inactivity-redirect";
import NoticesStars from "../components/notices-stars";
import { useEffect, useState } from "react";
import ModalNotices from "../components/modal-notices";
import PlaymobilBackground from "../assets/images/bg-playmobil.png";
import SophieBackground from "../assets/images/bg-sophie.png";
import KikiBackground from "../assets/images/bg-kiki.png";
import classNames from "classnames";
import { Undo, House } from "lucide-react";
import { Button } from "../components/buttons";
import { useNavigate } from "react-router-dom";

export default function Questions() {
  const navigate = useNavigate();
  const { idavatar } = useParams();
  const avatarId = parseInt(idavatar);
  const avatarData = questions[0].avatars.find(
    (avatar) => avatar.id === avatarId,
  );
  const avatarQuestions = avatarData ? avatarData.questions : [];
  useInactivityRedirect(120000);

  const [questionAlreadyAsked, setQuestionAlreadyAsked] = useState([]);
  const [replacedElements, setReplacedElements] = useState({});
  const [questionsToShow, setQuestionsToShow] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [background, setBackground] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [borderColor, setBorderColor] = useState(null);
  const [textColor, setTextColor] = useState(null);
  const [newButtonTextcolor, setNewButtonTextcolor] = useState(null);
  const [newButtonbgcolor, setNewButtonbgcolor] = useState(null);
  const [newButtonBorderColor, setNewButtonBorderColor] = useState(null);

  useEffect(() => {
    if (avatarId === 1) {
      setBackground(PlaymobilBackground);
      setBackgroundColor("bg-customRedTitre");
      setBorderColor("border-red-600");
      setTextColor("text-red-900");
      setNewButtonTextcolor("text-customRedTextButton");
      setNewButtonbgcolor("bg-custom-Redgradient");
      setNewButtonBorderColor("border-customRedBorder");
    } else if (avatarId === 2) {
      setBackground(SophieBackground);
      setBackgroundColor("bg-customYellowTitre");
      setBorderColor("border-yellow-500");
      setTextColor("text-customYellowTitre");
      setNewButtonTextcolor("text-customYellowTexteButton");
      setNewButtonbgcolor("bg-amber-300");
      setNewButtonBorderColor("border-customYellowBorder");
    } else if (avatarId === 3) {
      setBackground(KikiBackground);
      setBackgroundColor("bg-customGreenTitre");
      setBorderColor("border-emerald-600");
      setTextColor("text-customGreenTitre");
      setNewButtonTextcolor("text-green-800");
      setNewButtonbgcolor("bg-custom-Greengradient");
      setNewButtonBorderColor("border-customGreenBorder");
    }
  }, [avatarId]);

  const filteredQuestions = avatarQuestions
    .filter((question) => !questionAlreadyAsked.includes(question.id))
    .slice(0, questionsToShow);

  useEffect(() => {
    if (filteredQuestions.length === 0 && questionAlreadyAsked.length > 0) {
      setIsModalOpen(true);
    }
  }, [filteredQuestions, questionAlreadyAsked]);

  const handleClick = (questionId) => {
    setQuestionAlreadyAsked([...questionAlreadyAsked, questionId]);
    setReplacedElements({
      ...replacedElements,
      [questionId]: { id: questionId, question: "New Element" },
    });
    setQuestionsToShow((prev) => (prev < 3 ? prev + 1 : 3));
  };

  const handleUndoLastQuestion = () => {
    if (questionAlreadyAsked.length > 0) {
      const lastQuestionId =
        questionAlreadyAsked[questionAlreadyAsked.length - 1];
      setQuestionAlreadyAsked(questionAlreadyAsked.slice(0, -1));

      const newReplacedElements = { ...replacedElements };
      delete newReplacedElements[lastQuestionId];

      setReplacedElements(newReplacedElements);

      setQuestionsToShow((prev) => Math.max(1, prev - 1));
    }
  };

  return (
    <Layout
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <NoticesStars openModal={() => setIsModalOpen(true)} />
      {isModalOpen && <ModalNotices />}
      <div className="flex items-start p-8">
        <div className="flex gap-4">
          <Link to="/choice-avatar">
            <button
              className={classNames(
                `p-4 font-bold rounded-full text-white ${newButtonbgcolor} ${newButtonBorderColor}`,
              )}
            >
              <House size={24} />
            </button>
          </Link>
          <button
            onClick={handleUndoLastQuestion}
            disabled={questionAlreadyAsked.length === 0}
            className={classNames(
              `p-4 font-bold rounded-full text-white ${newButtonbgcolor} ${newButtonBorderColor}`,
              questionAlreadyAsked.length === 0
                ? "opacity-50 cursor-not-allowed"
                : "",
            )}
          >
            <Undo size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center gap-5 mx-auto -translate-x-10">
          <div>
            <p className={`text-5xl font-bold ${textColor}`}>
              {avatarData ? avatarData.name : "Avatar introuvable"}
            </p>
          </div>
          <div>
            <p className={`${textColor} font-bold text-2xl`}>
              Choisis ta question
            </p>
          </div>
        </div>
      </div>
      {filteredQuestions.length > 0 ? (
        <div className="flex flex-col gap-10 h-[70vh] justify-center items-center p-10">
          {filteredQuestions.map((question) => (
            <div
              key={question.id}
              onClick={() => handleClick(question.id)}
              className="flex justify-center items-center cursor-pointer w-fit h-fit"
            >
              {replacedElements[question.id] ? (
                <div className="p-4 m-4 transition-colors duration-300 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-gray-200">
                  {replacedElements[question.id].question}
                </div>
              ) : (
                <CardQuestion
                  key={question.id}
                  person={question}
                  bgColor={newButtonbgcolor}
                  color={newButtonTextcolor}
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh] text-white gap-4">
          <p className={`${textColor} font-bold text-2xl`}>
            Tu as répondu à toutes les questions
          </p>
          <p className="text-lg mb-8">
            Clique sur le bouton ci-dessous pour revenir à la sélection de
            l'avatar
          </p>
          <Button
            styleType="primary"
            className={"bg-red-400 text-white"}
            onClick={() => navigate("/choice-avatar")}
          >
            Revenir à la sélection
          </Button>
        </div>
      )}
    </Layout>
  );
}
