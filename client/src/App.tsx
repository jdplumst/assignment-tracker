import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/styles';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
