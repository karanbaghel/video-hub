
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Video from "./component/Video";
import { Upload } from "./component/Upload";
import Signup from './component/Signup'
import Login from './component/Login'
function App() {
  return (
    <>
    {
      <BrowserRouter>  
       <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Video' element={<Video/>}></Route>
        <Route path='/Upload' element={<Upload/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    }
    </>
    
  );
}

export default App;
