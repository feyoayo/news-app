import React, { useState, useEffect } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const NewsCard = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  width: 400px;
  height: 550px;
  overflow-y: scroll;
  border: black 1px solid;
  border-radius: 10px;
  background: black;
  color: white;
`;

const NewsImg = styled.img`
  width: 100%;
  height: 220px;
`;

const NewsTitle = styled.h3`
  text-align: center;
  cursor: pointer;
  font-size: 1.5rem;
`;

const NewsDescription = styled.h4`
  text-align: center;
  font-size: 1rem;
`;

//Компонент
const NewsTemplate = ({ item }) => {

  const [content, showContent] = useState(false);

  const loadImg = () => {
      //Картинка заглушка
      return (
          <img src="https://dummyimage.com/340x220/242124/3d3d4d&text=+" alt=""/>
      )
    }


  const OtherContent = () => {
    //Компонент с внутренностями, которые под спойлером
    return (
      <>
        <a href={item.url}>
          <NewsImg
            onLoad={loadImg}
            src={item.urlToImage}
            title={"Натисніть щоб перейти за посиланням"}
            alt="Зоображення новини"
          />
        </a>
        <NewsDescription>{item.description}</NewsDescription>
        <p>{item.author}</p>
      </>
    );
  };
    return (
        <Bootstr news={item}/>
    );
};

export default NewsTemplate;



const Bootstr = ({news}) => {
    return (
        <div className='card mt-3 col-md-6 col-sm-12 col-lg-4'>
            <img src={news.urlToImage || 'https://dummyimage.com/340x220/242124/3d3d4d&text=+'} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text">{news.description}</p>
                </div>
                <div className="card-footer bg-transparent">{news.author}</div>
        </div>
    )
}