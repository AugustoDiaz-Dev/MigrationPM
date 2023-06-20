import React, {useState, useEffect} from 'react'

const Component2 = () => {

    const [resourceType, setResourceType] = useState('posts');

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
          .then(response => response.json())
          .then(json => setItems(json))
    }, [resourceType]);

  return (
    <>
    <h2>Component 2</h2>
    <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() =>  setResourceType('users')}>Users</button>
        <button onClick={() =>  setResourceType('comments')}>Comments</button>
    </div>
    <h3>{resourceType}</h3>
    {items.map(item => {
      return  <pre>
          {JSON.stringify(item)}
        </pre>
      
    })}
    
    </>
  )
}

export default Component2