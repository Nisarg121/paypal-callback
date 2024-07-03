import { Route, Routes } from "react-router-dom";
import SuccessPage from "./components/success-page";
import CancelPage from "./components/cancel-page";

function App() {
  return (
    <Routes>
      <Route path="/com.mi_red.mi_red/success" element={<SuccessPage />} />
      <Route path="/com.mi_red.mi_red/cancel" element={<CancelPage />} />
    </Routes>
  );
}

export default App;
