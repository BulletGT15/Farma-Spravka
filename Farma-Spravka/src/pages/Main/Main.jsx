import './Main.scss';
import Search from './components/Search/Search.jsx';
import Catalog_sec from './components/Catalog/Catalog_sec.jsx';
import Drug from './components/Drug/Drug.jsx';
import News from './components/News/News.jsx';

function Main() {
  
  return (
    <>
    <Search/>
    <Catalog_sec/>
    <Drug/>
    <News/>
    </>
  )
}

export default Main