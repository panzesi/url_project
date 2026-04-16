
import { useNavigate } from 'react-router-dom';
import { questions } from '@/data/questions';
import { useQuizStore } from '@/store/useQuizStore';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Quiz() {
  const navigate = useNavigate();
  const {
    currentQuestion,
    answers,
    setAnswer,
    nextQuestion,
    prevQuestion,
    calculateResult
  } = useQuizStore();

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const hasAnswered = !!answers[question.id];

  const handleSelectOption = (optionId: string) => {
    const option = question.options.find(o => o.id === optionId);
    if (option) {
      setAnswer(question.id, optionId, option.personalityPoints);
    }
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      calculateResult();
      navigate('/result');
    } else {
      nextQuestion();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-gray-600">
                问题 {currentQuestion + 1} / {questions.length}
              </span>
              <span className="text-sm font-semibold text-purple-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
            {question.text}
          </h2>

          <div className="space-y-4 mb-8">
            {question.options.map((option) => {
              const isSelected = answers[question.id] === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50 shadow-md'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      isSelected
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {option.id.toUpperCase()}
                    </div>
                    <span className={`font-medium ${
                      isSelected ? 'text-purple-700' : 'text-gray-700'
                    }`}>
                      {option.text}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-6 h-6 text-purple-500 ml-auto" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex-1 py-4 px-6 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                currentQuestion === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              上一题
            </button>

            <button
              onClick={handleNext}
              disabled={!hasAnswered}
              className={`flex-1 py-4 px-6 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                !hasAnswered
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105'
              }`}
            >
              {currentQuestion === questions.length - 1 ? '查看结果' : '下一题'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
