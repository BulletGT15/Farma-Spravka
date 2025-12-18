import './Search.scss'

function Search() {
  
  return (
    <>
    <section className='Search'>
        <div>
            <p>Ваш надёжный путеводитель по лекарствам</p>
            <p>Найдите лекарства которые вам необходимы</p>
            <div><img src="src/assets/Main/search.png" alt="search" /><input type="text" placeholder='Искать...'/></div>
        </div>
    </section>
    </>
  )
}

export default Search