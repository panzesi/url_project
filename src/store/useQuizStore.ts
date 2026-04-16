
import { create } from 'zustand';
import { Personality, calculatePersonality } from '@/data/personalities';

interface QuizState {
  currentQuestion: number;
  answers: Record&lt;number, string&gt;;
  scores: Record&lt;string, number&gt;;
  result: Personality | null;
  isComplete: boolean;
  
  setAnswer: (questionId: number, optionId: string, points: Record&lt;string, number&gt;) =&gt; void;
  nextQuestion: () =&gt; void;
  prevQuestion: () =&gt; void;
  calculateResult: () =&gt; void;
  reset: () =&gt; void;
}

export const useQuizStore = create&lt;QuizState&gt;((set, get) =&gt; ({
  currentQuestion: 0,
  answers: {},
  scores: {},
  result: null,
  isComplete: false,

  setAnswer: (questionId, optionId, points) =&gt; {
    const { answers, scores } = get();
    
    const newAnswers = { ...answers, [questionId]: optionId };
    
    const newScores = { ...scores };
    Object.entries(points).forEach(([key, value]) =&gt; {
      newScores[key] = (newScores[key] || 0) + value;
    });

    set({ answers: newAnswers, scores: newScores });
  },

  nextQuestion: () =&gt; {
    set((state) =&gt; ({
      currentQuestion: Math.min(state.currentQuestion + 1, 9)
    }));
  },

  prevQuestion: () =&gt; {
    set((state) =&gt; ({
      currentQuestion: Math.max(state.currentQuestion - 1, 0)
    }));
  },

  calculateResult: () =&gt; {
    const { scores } = get();
    const result = calculatePersonality(scores);
    set({ result, isComplete: true });
  },

  reset: () =&gt; {
    set({
      currentQuestion: 0,
      answers: {},
      scores: {},
      result: null,
      isComplete: false
    });
  }
}));
