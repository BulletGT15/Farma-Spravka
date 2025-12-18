import './Main.scss';
import Search from './components/Search/Search.jsx';
import Catalog from './components/Catalog/Catalog.jsx';
import Drug from './components/Drug/Drug.jsx';
import News from './components/News/News.jsx';

function Main() {
  
  return (
    <>
    <Search/>
    <Catalog/>
    <Drug/>
    <News/>
    </>
  )
}

export default Main