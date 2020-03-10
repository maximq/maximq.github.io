function ActionLink() {
    let imgs = ["img/html.png", "img/bsod.png", "img/bot.png"];
    let check = ['❑', '❑', '❑'];

    const servicetexthtml = (
        <div><h3>Разработка/Доработка сайтов</h3>
            <br />
            <p>Разработка сайтов под ключ:</p>
            <ul>
                <li>Простой, стильный сайт частного специалиста или организации.</li>
                <li>Разработка сайта для компании с каталогом продукции.</li>
                <li>Разработка сайтов-визиток (одностраничников) под ключ.</li>
                <li>Поддержка и обслуживание сайта.</li>
            </ul>
            <br />
            <p>Доработка сайтов:</p>
            <ul>
                <li>Внедрение новых компонентов, скриптов (чаты, обратная связь), React</li>
                <li>Оптимизация загрузки</li>
                <li>Доработка дизайна</li>
                <li>Разработка JS, jQuery скриптов</li>
            </ul></div>
    );
    const servicetextbsod = (
        <div><h3>Любая компьютерная помощь</h3>
            <br />
            <p>Ремонт компьютеров и ноутбуков</p>
            <ul>
                <li>Диагностика</li>
                <li>Замена комплектующих</li>
                <li>Замена термопасты</li>
                <li>Ремонт и замена USB гнёзд, гнёзд питания</li>
            </ul>
            <br />
            <p>Программная часть:</p>
            <ul>
                <li>Чистка от вирусов.</li>
                <li>Оптимизация загрузки.</li>
                <li>Установка различного ПО (антивирусы, office)</li>
                <li>Переустановка ОС</li>
            </ul></div>
    );
    const servicetextbot = (
        <div><h3>Разработка ботов и других скриптов</h3>
            <br />
            <p>Разработка чат ботов под ключ</p>
            <ul>
                <li>Чат боты для бесед ВКонтакте</li>
                <li>Разработка ботов для Telegram</li>
                <li>Разработка любой сложности</li>
            </ul>
            <br />
            <p>Разработка скриптов и программ</p>
            <ul>
                <li>Программы для парсинга и автоматизации сбора текстов</li>
                <li>Скрипты для обращения к API</li>
            </ul>
        </div>
    );
    let texts = [servicetexthtml, servicetextbsod, servicetextbot];
    let cursor = 0;
    slide();

    function slide() {
        ReactDOM.render(
            <img style={{position: 'relative'}} height="200px" src={imgs[cursor]} />,
            document.getElementById('img')
        );
        check[cursor] = '☑';
        ReactDOM.render(
            <div style={{position: 'relative', bottom: '60px'}}>{check}</div>,
            document.getElementById('checkbox')
        );
        ReactDOM.render(
            <div>{texts[cursor]}</div>,
            document.getElementById('servicetext')
        )
    }
    function handleClickL(e) {
        e.preventDefault();
        check[cursor] = '❑';
        if (cursor === 0){
            cursor = 2;
        }else {cursor -= 1;}
        slide();
    }
    function handleClickR(e) {
        e.preventDefault();
        check[cursor] = '❑';
        if (cursor === imgs.length-1){
            cursor = 0;
        }else {cursor += 1;}
        slide();
    }

    return (
        <div style={{display: 'inline-flex'}}>
            <a href="#" onClick={handleClickL} style={{color: 'black', fontSize: '40px', position: 'relative', right: '120px', bottom: '120px'}}>
                &larr;
            </a>
            <a href="#" onClick={handleClickR} style={{color: 'black', fontSize: '40px', position: 'relative', left: '120px', bottom: '120px'}}>
                &rarr;
            </a>
        </div>

    );
}
ReactDOM.render(
    <ActionLink/>,
    document.getElementById('slider')
);
