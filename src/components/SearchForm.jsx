import React, {useState} from "react";
import styled from "styled-components";
//

//Стили
const SForm = styled.form`
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: black 1px solid;
  border-radius: 10px;
`


//Компонент
const SearchForm = ({searchParams, news}) => {
    const [searchValue, setSearchValue] = useState('')
    const [lang, setLang] = useState('ua')
    const [category, setCategory] = useState('general')

    const formSubmit = (e) => {
        console.log('formSubmit')
        e.preventDefault()
        const searchInput = e.target.children[0]
        setSearchValue(searchInput.value)
        // !searchValue.trim().length && console.log('empty')
    }

    const changeLang = (e) => {
        const value = e.target.value;
        return setLang(value)
    }
    const changeCategory = (e) => {
        const value = e.target.value;
        return setCategory(value)
    }
    const resetButton = (e) => {
        const form = document.getElementById('searchInput')
        form.value = '';
    }


    React.useEffect(() => {
        if(searchValue && lang === 'ua')(
            setLang('ru')
        )
        searchParams(searchValue, lang, category)
        console.log('useEffectInSearchForm')
    }, [lang, category, searchValue])

    return (
        <div className='search-body d-flex justify-content-center mt-5'>
            <form className='col-sm-10' onSubmit={formSubmit}>
                <input id='searchInput' type="text"/>
                <SelectCountry changeLang={changeLang}/>
                <SelectCategory changeCategory={changeCategory}/>
                <div className='btn-group'>
                    <button className='btn btn-secondary' type="submit">Найти!</button>
                    <button className='btn btn-danger' onClick={resetButton}>reset</button>
                </div>

            </form>
        </div>

    );
};


export default SearchForm;

const SelectCountry = ({changeLang}) => {
    return (
        <select onChange={changeLang} name="country">
            <option value="ua">UA</option>
            <option value="us">USA</option>
            <option value="ru">RU</option>
        </select>
    );
};

const SelectCategory = ({changeCategory}) => {
    return (
        <select onChange={changeCategory} name="category">
            <option value="general">Главные</option>
            <option value="business">Бизнесс</option>
            <option value="entertainment">Развлечения</option>
            <option value="general">Здоровье</option>
            <option value="science">Наука</option>
            <option value="sports">Спорт</option>
            <option value="technology">Технологии</option>
        </select>
    );
};


//TODO Каждый компонент Формы (Инпут, 2 селекта, кнопка сабмит) вероятно придется выносить в отдельные файлы

//TODO форма с пустым инпутом будет искать в topheaders а если в инпуте что то есть то будет искать в everything. Оба метода есть в сервисе. Первый ищет по категориям и странам, другой по q (query) запросу который и будет передаваться благодаря input.value

//TODO доделать сортировки, все доступные с сайта апи, так же смену языка поиска новостей можно
// прибабахнуть, она по умолчанию RU уже установлена