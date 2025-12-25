import './Header.scss';
import { Link } from 'react-router';

function Header() {

  return (
    <>
    <header>
        <img src="src/assets/Header/logo.png" alt="logo" />
        <div>
            <Link to="/" className='link-button'>Главная</Link>
            <Link to="/Catalog" className='link-button'>Каталог</Link>
            <Link to="/News" className='link-button'>Статьи</Link>
            <Link className='link-button'>Сравнение</Link>
            <Link className='link-button'>Избранное</Link>
        </div>
        <div>
            <button>Регистрация</button>
            <button>Войти</button>
        </div>
    </header>
    </>
  )
}

export default Header