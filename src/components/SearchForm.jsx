import React from "react";
import styled from "styled-components";

const SearchForm = (props) => {
  return (
    <form>
      <input type="text" />
      <SelectCountry />
      <SelectCategory />
      <button type="submit">Найти!</button>
    </form>
  );
};

const SelectCountry = () => {
  return (
    <select name="country" id="">
      <option value="ua">UA</option>
      <option value="us">USA</option>
      <option value="ru">RU</option>
    </select>
  );
};

const SelectCategory = () => {
  return (
    <select name="category" id="">
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

//TODO SearchForm компонент в котором будет инпут для поиска, селект для выбора языка, для новостей, выбор категории, и кнопка поиска(сабмита).

//TODO Каждый компонент Формы (Инпут, 2 селекта, кнопка сабмит) вероятно придется выносить в отдельные файлы

//TODO форма с пустым инпутом будет искать в topheaders а если в инпуте что то есть то будет искать в everything. Оба метода есть в сервисе. Первый ищет по категориям и странам, другой по q (query) запросу который и будет передаваться благодаря input.value
