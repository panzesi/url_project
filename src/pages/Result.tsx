
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '@/store/useQuizStore';
import {
  Trophy,
  RotateCcw,
  Share2,
  Target,
  Shield,
  Users,
  Lock,
  Zap,
  Music,
  Star,
  Crown,
  CheckCircle2
} from 'lucide-react';
import { personalities } from '@/data/personalities';

const iconMap: Record&lt;string, any&gt; = {
  target: Target,
  shield: Shield,
  users: Users,
  lock: Lock,
  zap: Zap,
  music: Music,
  star: Star,
  crown: Crown
};

export default function Result() {
  const navigate = useNavigate();
  const { result, reset } = useQuizStore();

  if (!result) {
    navigate('/');
    return null;
  }

  const Icon = iconMap[result.iconName] || Star;

  const handleShare = async () =&gt; {
    const shareText = `🏀 我的篮球人格是【${result.name}】！快来测测你是哪种类型的球员吧！`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: '篮球人格测试',
          text: shareText,
          url: window.location.href
        });
      } catch (err) {
        console.log('分享被取消');
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert('已复制分享文案到剪贴板！');
      } catch (err) {
        alert(shareText);
      }
    }
  };

  const handleRestart = () =&gt; {
    reset();
    navigate('/');
  };

  return (
    &lt;div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center p-4"&gt;
      &lt;div className="max-w-2xl w-full"&gt;
        &lt;div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden"&gt;
          &lt;div 
            className="p-8 text-center"
            style={{ backgroundColor: result.color }}
          &gt;
            &lt;div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 animate-pulse"&gt;
              &lt;Icon className="w-12 h-12 text-white" /&gt;
            &lt;/div&gt;
            &lt;div className="text-6xl mb-2"&gt;{result.emoji}&lt;/div&gt;
            &lt;h1 className="text-3xl font-bold text-white mb-2"&gt;
              {result.name}
            &lt;/h1&gt;
            &lt;p className="text-white/90 text-lg"&gt;你的篮球人格&lt;/p&gt;
          &lt;/div&gt;

          &lt;div className="p-8"&gt;
            &lt;div className="mb-8"&gt;
              &lt;h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"&gt;
                &lt;Trophy className="w-6 h-6 text-orange-500" /&gt;
                人格分析
              &lt;/h2&gt;
              &lt;p className="text-gray-600 leading-relaxed text-lg"&gt;
                {result.description}
              &lt;/p&gt;
            &lt;/div&gt;

            &lt;div className="mb-8"&gt;
              &lt;h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"&gt;
                &lt;Star className="w-6 h-6 text-yellow-500" /&gt;
                你的优势
              &lt;/h2&gt;
              &lt;div className="space-y-3"&gt;
                {result.strengths.map((strength, index) =&gt; (
                  &lt;div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"&gt;
                    &lt;CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" /&gt;
                    &lt;span className="text-gray-700 font-medium"&gt;{strength}&lt;/span&gt;
                  &lt;/div&gt;
                ))}
              &lt;/div&gt;
            &lt;/div&gt;

            &lt;div className="mb-8"&gt;
              &lt;h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"&gt;
                &lt;Users className="w-6 h-6 text-blue-500" /&gt;
                所有8种人格类型
              &lt;/h2&gt;
              &lt;div className="grid grid-cols-2 gap-3"&gt;
                {personalities.map((personality) =&gt; {
                  const isCurrent = personality.id === result.id;
                  const SmallIcon = iconMap[personality.iconName] || Star;
                  return (
                    &lt;div
                      key={personality.id}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        isCurrent
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    &gt;
                      &lt;div className="flex items-center gap-2"&gt;
                        &lt;SmallIcon 
                          className="w-4 h-4" 
                          style={{ color: isCurrent ? result.color : '#9CA3AF' }}
                        /&gt;
                        &lt;span className={`text-sm font-medium ${
                          isCurrent ? 'text-orange-700' : 'text-gray-600'
                        }`}&gt;
                          {personality.name}
                        &lt;/span&gt;
                        {isCurrent &amp;&amp; (
                          &lt;CheckCircle2 className="w-4 h-4 text-orange-500 ml-auto" /&gt;
                        )}
                      &lt;/div&gt;
                    &lt;/div&gt;
                  );
                })}
              &lt;/div&gt;
            &lt;/div&gt;

            &lt;div className="space-y-4"&gt;
              &lt;button
                onClick={handleShare}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              &gt;
                &lt;Share2 className="w-6 h-6" /&gt;
                分享给好友
              &lt;/button&gt;

              &lt;button
                onClick={handleRestart}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 flex items-center justify-center gap-3"
              &gt;
                &lt;RotateCcw className="w-6 h-6" /&gt;
                重新测试
              &lt;/button&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
}
