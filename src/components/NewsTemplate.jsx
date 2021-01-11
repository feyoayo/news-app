import React, {useState, useEffect} from 'react';
import Spinner from "./Spinner/Spinner";
import styled from 'styled-components'

const NewsCard = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  width: 70%;
  height: auto;
  border: black 1px solid;
  border-radius: 10px;
  background: black;
  color: white;
`

const NewsImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const NewsTitle = styled.h3`
  cursor: pointer;
  font-size: 40px;
`

const NewsDescription = styled.h4`
  text-align: center;
`

const NewsTemplate = ({item}) => {
    const [image, setImage] = useState(false)
    const [loading, setLoading] = useState(true)
    const showImage = () => {
        return setImage(!image)
    }
    const OtherContent = () => {
        //Компонент с внутренностями, которые под спойлером
        return (
            <>
                <a href={item.url}><NewsImg src={!item.urlToImage ? <Spinner/> : item.urlToImage}
                                            title={"Натисніть щоб перейти за посиланням"}
                                            alt="Зоображення новини"/></a>
                <NewsDescription>{item.description}</NewsDescription>
                <p>{item.author}</p>

            </>
        )
    }
    const MainContent = () => {
        return (
            <>
                {image ? <OtherContent/> : null}

            </>
        )
    }
    const Template = () => {

        return (
            <NewsCard>
                <NewsTitle onClick={showImage}>{item.title}</NewsTitle>
                <div className={'other-content'}>
                    <MainContent/>
                </div>


            </NewsCard>
        )
    }
    return (
        <Template/>
    )
}

export default NewsTemplate