import './News.scss'

function News() {
  
  return (
    <>
    <section className='News'>
        <p>Полезные статьи и новости</p>
        <div>
            <div className='news-tab'>
                <img src="src/assets/Main/preview.png" alt="news-picture"/>
                <p>Простуда и грипп: в чем разница и как лечить правильно?</p>
                <button>Читать</button>
            </div>
            <div className='news-tab'>
                <img src="src/assets/Main/preview.png" alt="news-picture"/>
                <p>Простуда и грипп: в чем разница и как лечить правильно?</p>
                <button>Читать</button>
            </div>
            <div className='news-tab'>
                <img src="src/assets/Main/preview.png" alt="news-picture"/>
                <p>Простуда и грипп: в чем разница и как лечить правильно?</p>
                <button>Читать</button>
            </div>
        </div>
        <button>Увидеть больше</button>
    </section>
    </>
  )
}

export default News