import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Quiz from "@/pages/Quiz";
import Result from "@/pages/Result";

export default function App() {
  return (
    &lt;Router&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
        &lt;Route path="/quiz" element={&lt;Quiz /&gt;} /&gt;
        &lt;Route path="/result" element={&lt;Result /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/Router&gt;
  );
}
