//cspell:disable
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import AnimatedPage from "./pages/AnimatedPage";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/acceuil' element={<Acceuil />}></Route>
                <Route path='/Presentation' element={<AnimatedPage />}></Route>

            </Routes>
        </BrowserRouter>
    );
};
export default App;