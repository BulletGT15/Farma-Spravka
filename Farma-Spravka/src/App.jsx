import './App.scss';
import Header from './components/Header/Header.jsx';
import Main from './pages/Main/Main.jsx';
import Catalog from './pages/Catalog/Catalog.jsx';
import News from './pages/News/News.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path="/Catalog" element={<Catalog/>}/>
        <Route path="/News" element={<News/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App