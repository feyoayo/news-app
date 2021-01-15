import React from 'react';
import NewsTemplate from "./NewsTemplate";
import styled from 'styled-components'

const NewsDesk = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 95%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const NewsBody = ({news}) => {
    return (
       <NewsDesk>
           {news.map(item => {
              return <NewsTemplate key={item.url} item={item}/>
           })}
       </NewsDesk>
    )
}

export default NewsBody;