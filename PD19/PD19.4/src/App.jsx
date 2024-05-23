import { useState } from 'react'
import './App.css'

function App() {
  const items = ["apple", "Banana", 'Pineapple', "lemon", "Peach"]
  const [filter, setFilter] = useState('');

  const handleInputChange = (e) => {
    setFilter(e.target.value);
  };
 
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div id='realDiv'>
        <p>Type to filter items:
          <input id='filter' name='filter' type="text" value={filter} onChange={handleInputChange} />
        </p>
        <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default App
