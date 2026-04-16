
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

  const handleSelectOption = (optionId: string) =&gt; {
    const option = question.options.find(o =&gt; o.id === optionId);
    if (option) {
      setAnswer(question.id, optionId, option.personalityPoints);
    }
  };

  const handleNext = () =&gt; {
    if (currentQuestion === questions.length - 1) {
      calculateResult();
      navigate('/result');
    } else {
      nextQuestion();
    }
  };

  return (
    &lt;div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center p-4"&gt;
      &lt;div className="max-w-2xl w-full"&gt;
        &lt;div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8"&gt;
          &lt;div className="mb-6"&gt;
            &lt;div className="flex justify-between items-center mb-3"&gt;
              &lt;span className="text-sm font-semibold text-gray-600"&gt;
                问题 {currentQuestion + 1} / {questions.length}
              &lt;/span&gt;
              &lt;span className="text-sm font-semibold text-orange-600"&gt;
                {Math.round(progress)}%
              &lt;/span&gt;
            &lt;/div&gt;
            &lt;div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden"&gt;
              &lt;div
                className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              /&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          &lt;h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed"&gt;
            {question.text}
          &lt;/h2&gt;

          &lt;div className="space-y-4 mb-8"&gt;
            {question.options.map((option) =&gt; {
              const isSelected = answers[question.id] === option.id;
              return (
                &lt;button
                  key={option.id}
                  onClick={() =&gt; handleSelectOption(option.id)}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                    isSelected
                      ? 'border-orange-500 bg-orange-50 shadow-md'
                      : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                  }`}
                &gt;
                  &lt;div className="flex items-center gap-4"&gt;
                    &lt;div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      isSelected
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}&gt;
                      {option.id.toUpperCase()}
                    &lt;/div&gt;
                    &lt;span className={`font-medium ${
                      isSelected ? 'text-orange-700' : 'text-gray-700'
                    }`}&gt;
                      {option.text}
                    &lt;/span&gt;
                    {isSelected &amp;&amp; (
                      &lt;CheckCircle2 className="w-6 h-6 text-orange-500 ml-auto" /&gt;
                    )}
                  &lt;/div&gt;
                &lt;/button&gt;
              );
            })}
          &lt;/div&gt;

          &lt;div className="flex gap-4"&gt;
            &lt;button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`flex-1 py-4 px-6 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                currentQuestion === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            &gt;
              &lt;ChevronLeft className="w-5 h-5" /&gt;
              上一题
            &lt;/button&gt;

            &lt;button
              onClick={handleNext}
              disabled={!hasAnswered}
              className={`flex-1 py-4 px-6 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                !hasAnswered
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transform hover:scale-105'
              }`}
            &gt;
              {currentQuestion === questions.length - 1 ? '查看结果' : '下一题'}
              &lt;ChevronRight className="w-5 h-5" /&gt;
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
