import Service from "./service/newsService";
import React, {useEffect, useState} from "react";
import NewsBody from "./components/NewsBody";
import Spinner from "./components/Spinner/Spinner";
import styled from "styled-components";
import SearchForm from "./components/SearchForm";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const NBody = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

function App() {
    const newsService = new Service();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getNews();
    }, []);


    const getNews = (searchValue, country, category) => {
        if (!searchValue) {
            return newsService.topHeadLines(country, category).then(response => setNews(response)).finally(() => setLoading(false))
        }

        return newsService.everything(searchValue, country).then(response => setNews(response)).finally(() => setLoading(false))
    };


    return (
        <NBody>
            <SearchForm
                searchParams={getNews}
                news={news}
            />
            {loading ? <Spinner/> : <NewsBody news={news}/>}
        </NBody>
    );
}

export default App;
