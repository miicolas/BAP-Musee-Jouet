import { Button } from "../common/buttons.jsx";
import { useNavigate } from "react-router-dom";

export const NoQuestionsLeft = ({ textColor }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-white gap-4">
      <p className={`${textColor} font-bold text-2xl`}>
        Tu as répondu à toutes les questions
      </p>
      <p className="text-lg mb-8">
        Clique sur le bouton ci-dessous pour revenir à la sélection de l'avatar
      </p>
      <Button
        styleType="primary"
        className="bg-red-400 text-white"
        onClick={() => navigate("/choice-avatar")}
      >
        Revenir à la sélection
      </Button>
    </div>
  );
};
