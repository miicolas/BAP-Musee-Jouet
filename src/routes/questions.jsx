import { useParams } from "react-router-dom";
import { questions } from "../lib/utils";
import Layout from "../layout";
import useInactivityRedirect from "../lib/use-inactivity-redirect";
import NoticesStars from "../components/common/notices-stars.jsx";
import { useEffect, useState } from "react";
import ModalNotices from "../components/common/modal-notices.jsx";
import { useAvatarTheme } from "../hooks/useAvatarTheme";
import { NoQuestionsLeft } from "../components/features/no-questions-left.jsx";
import { QuestionsList } from "../components/features/question-list.jsx";
import { PageHeader } from "../components/layout/page-header.jsx";
import { NavigationButtons } from "../components/common/navigation-buttons.jsx";

export default function Questions() {
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

  const theme = useAvatarTheme(avatarId);

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
      style={{ backgroundImage: `url(${theme.background})` }}
    >
      <NoticesStars openModal={() => setIsModalOpen(true)} />
      {isModalOpen && <ModalNotices />}
      <div className="flex items-start p-8">
        <NavigationButtons
          onUndoClick={handleUndoLastQuestion}
          canUndo={questionAlreadyAsked.length > 0}
          buttonBgColor={theme.buttonBgColor}
          buttonBorderColor={theme.buttonBorderColor}
        />
        <PageHeader avatarName={avatarData?.name} textColor={theme.textColor} />
      </div>
      {filteredQuestions.length > 0 ? (
        <QuestionsList
          questions={filteredQuestions}
          replacedElements={replacedElements}
          onQuestionClick={handleClick}
          buttonBgColor={theme.buttonBgColor}
          buttonTextColor={theme.buttonTextColor}
        />
      ) : (
        <NoQuestionsLeft textColor={theme.textColor} />
      )}
    </Layout>
  );
}
