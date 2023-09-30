import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import Cards from './Cards';

const Files = () => {
  const [data, setData] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('https://hitesh09saini.github.io/FolioApi/api.json') // Use Axios to fetch data
      .then((response) => {
        console.log('Fetched data:', response.data);
        setData(response.data.projects);
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
      {visibleCards.map((item) => (
        <Cards
          img={item.img}
          title={item.title}
          description={item.description}
          Vlink={item.visit.url}
          link={item.code.repository_url}
          key={item.title} // Add a unique key for each card
        />
      ))}
    </div>
  );
};

export default Files;
