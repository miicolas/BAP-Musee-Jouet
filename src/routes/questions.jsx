import { Link, useParams } from "react-router-dom";
import { questions } from "../lib/utils";
import CardQuestion from "../components/card-question";
import Layout from "../layout";
import useInactivityRedirect from "../lib/use-inactivity-redirect";
import NoticesStars from "../components/notices-stars";
import { useState, useEffect } from "react";
import ModalNotices from "../components/modal-notices";

export default function Questions() {
    const { idavatar } = useParams();
    const avatarId = parseInt(idavatar);
    const avatarData = questions[0].avatars.find(
        (avatar) => avatar.id === avatarId
    );
    const avatarQuestions = avatarData ? avatarData.questions : [];
    useInactivityRedirect(120000);

    const [questionAlreadyAsked, setQuestionAlreadyAsked] = useState([]);
    const [replacedElements, setReplacedElements] = useState({});
    const [questionsToShow, setQuestionsToShow] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredQuestions = avatarQuestions
        .filter(question => !questionAlreadyAsked.includes(question.id))
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
            [questionId]: { id: questionId, question: "New Element" }
        });

        setQuestionsToShow((prev) => (prev < 3 ? prev + 1 : 3)); // Max 3
    };

    return (
        <Layout>
            <Link to="/choice-avatar">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Retour
                </button>
            </Link>
            <NoticesStars openModal={() => setIsModalOpen(true)} />
            {isModalOpen && <ModalNotices />}
            <h1>
                Questions pour {avatarData ? avatarData.name : "Avatar introuvable"}
            </h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredQuestions.length > 0 ? (
                    filteredQuestions.map((question) => (
                        <div key={question.id} onClick={() => handleClick(question.id)} className="cursor-pointer">
                            {replacedElements[question.id] ? (
                                <div className="p-4 m-4 transition-colors duration-300 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-gray-200">
                                    {replacedElements[question.id].question}
                                </div>
                            ) : (
                                <CardQuestion key={question.id} person={question} />
                            )}
                        </div>
                    ))
                ) : (
                    <p>Aucune question trouvée pour cet avatar.</p>
                )}
            </div>x
        </Layout>
    );
}