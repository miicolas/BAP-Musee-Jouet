import { Link, useParams } from "react-router-dom";
import { questions } from "../lib/utils";
import CardQuestion from "../components/card-question";
import Layout from "../layout";
import useInactivityRedirect from "../lib/use-inactivity-redirect";
import NoticesStars from "../components/notices-stars";
import { useEffect, useState } from "react";
import ModalNotices from "../components/modal-notices";
import PlaymobilBackground from "../assets/images/bg-playmobil.png";
import SophieBackground from "../assets/images/bg-sophie.png";
import KikiBackground from "../assets/images/bg-kiki.png";
import classNames from "classnames";
import { ArrowLeft } from "lucide-react";

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
    const [background, setBackground] = useState(null);
    const [primaryColor, setPrimaryColor] = useState(null);
    const [secondaryColor, setSecondaryColor] = useState(null);

    useEffect(() => {
        if (avatarId === 1) {
            setBackground(PlaymobilBackground);
            setPrimaryColor("red-500");
            setSecondaryColor("red-700");
        } else if (avatarId === 2) {
            setBackground(SophieBackground);
            setPrimaryColor("yellow-500");
            setSecondaryColor("yellow-700");
        } else if (avatarId === 3) {
            setBackground(KikiBackground);
            setPrimaryColor("green-500");
            setSecondaryColor("green-700");
        }
    }, [avatarId]);

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

        setQuestionsToShow((prev) => (prev < 3 ? prev + 1 : 3));
    };

    return (
        <Layout className="bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
            <NoticesStars openModal={() => setIsModalOpen(true)} />
            {isModalOpen && <ModalNotices />}
            <div className="flex items-start p-8">
                <Link to="/choice-avatar">
                    <button className={classNames('p-4 font-bold rounded-full text-white', {
                        'bg-red-500': primaryColor === 'red-500',
                        'bg-yellow-500': primaryColor === 'yellow-500',
                        'bg-green-500': primaryColor === 'green-500',
                    })}>
                        <ArrowLeft size={24} />
                    </button>
                </Link>
                <div className='flex flex-col items-center gap-5 mx-auto -translate-x-10'>
                    <div
                        className={`bg-${primaryColor} w-80 min-h-16 h-auto flex items-center justify-center rounded-full shadow-btnshadow mx-auto`}>
                        <p className="text-white text-2xl font-bold">{avatarData ? avatarData.name : "Avatar introuvable"}</p>
                    </div>
                    <div>
                        <p className={`text-${primaryColor} font-bold text-2xl`}>Choisis ta question</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredQuestions.length > 0 ? (
                    filteredQuestions.map((question) => (
                        <div key={question.id} onClick={() => handleClick(question.id)} className="cursor-pointer">
                            {replacedElements[question.id] ? (
                                <div className="p-4 m-4 transition-colors duration-300 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-gray-200">
                                    {replacedElements[question.id].question}
                                </div>
                            ) : (
                                <CardQuestion key={question.id} person={question} color={primaryColor}/>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Aucune question trouvée pour cet avatar.</p>
                )}
            </div>
        </Layout>
    );
}