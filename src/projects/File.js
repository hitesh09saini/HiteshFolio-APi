import React, { useState, useEffect } from 'react';
import Cards from './Cards';

const Files = () => {
  const [data, setData] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('https://hitesh09saini.github.io/FolioApi/api.json')
      .then((res) => res.json())
      .then((responseData) => {
        console.log('Fetched data:', responseData);
        setData(responseData.projects);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);

  useEffect(() => {
    if (currentIndex < data.length) {
      const newItem = data[currentIndex];
      setVisibleCards((prevVisibleCards) => [...prevVisibleCards, newItem]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentIndex, data]);

  return (
    <div className='files-projects' id='files-projects'>
      
      {visibleCards.map((item, index) => (
        <Cards
          key={index}
          img={item.img}
          title={item.title}
          description={item.description}
          Vlink={item.visit.url}
          link={item.code.repository_url}
        />
      ))}
    </div>
  );
};

export default Files;
