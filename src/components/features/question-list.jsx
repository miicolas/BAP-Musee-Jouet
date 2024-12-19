import CardQuestion from "../cards/card-question.jsx";

export const QuestionsList = ({
  questions,
  replacedElements,
  onQuestionClick,
  buttonBgColor,
  buttonTextColor,
}) => (
  <div className="flex flex-col gap-10 h-[70vh] justify-center items-center p-10">
    {questions.map((question) => (
      <div
        key={question.id}
        onClick={() => onQuestionClick(question.id)}
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
            bgColor={buttonBgColor}
            color={buttonTextColor}
          />
        )}
      </div>
    ))}
  </div>
);
