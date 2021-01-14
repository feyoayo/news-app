import Service from "./service/newsService"
import React, {useEffect, useState} from 'react'
import NewsBody from "./components/NewsBody";
import Spinner from "./components/Spinner/Spinner";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.39);
`

const NBody = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
`
const SelectLanguage = styled.select`
  margin-right: 15px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background: black;
  color: white;
  
`

function App() {
    const newsService = new Service();
    const [news, setNews] = useState([]);
    const [lang, setLang] = useState('ua')

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        newsService.topHeadLines(lang).then(res => setNews(res))
    }, [lang])


    return (
        <NBody>
            <Navigation>
                <h1 style={{marginLeft: "15px"}}>{lang}</h1>
                <SelectLanguage onChange={(event) => {
                    setLang(event.target.value)
                }}>
                    <option value="ua">Українські новини</option>
                    <option value="us">Новини зі Сполученних Штатів</option>
                </SelectLanguage>
            </Navigation>

            {loading ? <Spinner/> : <NewsBody news={news}/>}

        </NBody>


    );
}

export default App;
