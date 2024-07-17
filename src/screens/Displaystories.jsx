import React, { useEffect, useState } from "react";

const DisplayStories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://child.onrender.com/api/sciencefiction');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Stories</h1>
      {data.map((story) => (
        <div key={story.id}>
          <h2>{story.title}</h2>
          <p>{story.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayStories;
