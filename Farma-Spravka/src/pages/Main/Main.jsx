import './Main.scss';
import Search_sec from './components/Search_sec/Search_sec.jsx';
import Catalog_sec from './components/Catalog_sec/Catalog_sec.jsx';
import Drug_sec from './components/Drug_sec/Drug_sec.jsx';
import News_sec from './components/News_sec/News_sec.jsx';

function Main() {
  
  return (
    <>
    <Search_sec/>
    <Catalog_sec/>
    <Drug_sec/>
    <News_sec/>
    </>
  )
}

export default Main