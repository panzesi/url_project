
import { useNavigate } from 'react-router-dom';
import { Trophy, Play } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Trophy className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
            篮球人格测试
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            想知道你在球场上是哪种类型的球员吗？<br />
            回答10道简单的问题，发现你的篮球人格！
          </p>
          
          <button
            onClick={() => navigate('/quiz')}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-2xl text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Play className="w-6 h-6 fill-current" />
            开始测试
          </button>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              🏀 8种有趣的人格类型等你发现
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
