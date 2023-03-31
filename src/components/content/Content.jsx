import './Content.css'

const Content = () => {
    return (
        <div className='content'>
            <div className="content__photo"></div>
            <div className="content__descr">
                 <b>Имя:</b> Анна
                <br />
                 <b>Возраст:</b>  20 лет
                <br />
                <b>Место жительства:</b>ород Нью-Йорк
                <br />
                <b>Образование: </b>студентка колледжа, изучает маркетинг
                <br />
                <b>Профессия: </b>работает на полставки в рекламном агентстве
                <br />
                <b>Увлечения:</b>любит путешествовать, фотографировать и заниматься йогой
            </div>
        </div>
    )
}

export default Content