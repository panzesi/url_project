
import { create } from 'zustand';
import { Personality, calculatePersonality } from '@/data/personalities';

interface QuizState {
  currentQuestion: number;
  answers: Record<number, string>;
  scores: Record<string, number>;
  result: Personality | null;
  isComplete: boolean;
  
  setAnswer: (questionId: number, optionId: string, points: Record<string, number>) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  calculateResult: () => void;
  reset: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  currentQuestion: 0,
  answers: {},
  scores: {},
  result: null,
  isComplete: false,

  setAnswer: (questionId, optionId, points) => {
    const { answers, scores } = get();
    
    const newAnswers = { ...answers, [questionId]: optionId };
    
    const newScores = { ...scores };
    Object.entries(points).forEach(([key, value]) => {
      newScores[key] = (newScores[key] || 0) + value;
    });

    set({ answers: newAnswers, scores: newScores });
  },

  nextQuestion: () => {
    set((state) => ({
      currentQuestion: Math.min(state.currentQuestion + 1, 9)
    }));
  },

  prevQuestion: () => {
    set((state) => ({
      currentQuestion: Math.max(state.currentQuestion - 1, 0)
    }));
  },

  calculateResult: () => {
    const { scores } = get();
    const result = calculatePersonality(scores);
    set({ result, isComplete: true });
  },

  reset: () => {
    set({
      currentQuestion: 0,
      answers: {},
      scores: {},
      result: null,
      isComplete: false
    });
  }
}));
