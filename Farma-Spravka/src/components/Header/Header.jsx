import './Header.scss'

function Header() {

  return (
    <>
    <header>
        <img src="src/assets/Header/logo.png" alt="logo" />
        <div>
            <p>Главная</p>
            <p>Каталог</p>
            <p>Статьи</p>
            <p>Сравнение</p>
            <p>Избранное</p>
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