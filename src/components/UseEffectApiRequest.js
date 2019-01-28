import React, { useState, useEffect } from "react";

const UseEffectApiRequestComponent = () => {
  let [posts, setPosts] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://pablomagaz.com/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data.posts))
      .finally(() => setIsLoading(false));
  }, []); //Solo se ejecuta una vez si el contenido del Array cambia

  const loading = (isLoading) ? <center>Loading...</center> : null;

  return (
   <fieldset>
      <div>
        { loading  }
        { posts.map((post, key) => (
          <div key={ key }>
            { post.title }
          </div>
        ))}
        </div>
    </fieldset>
  );
}

export default UseEffectApiRequestComponent;