import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import InputSection from './components/InputSection';
import Notes from './components/Notes';

function App() {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
      setAddItem((prev) => {
          return [...prev , note];

      });

      console.log(note);
  }

  return (
    <div className="App">
      <Header/>
      <InputSection 
          passNote = {addNote}
      />

      <div className = "notes-collection" >
        {addItem.map((item,index) => {
          return (
            <Notes
                key = {index}
                id = {index}
                title = {item.title}
                description = {item.description}
            />); 
        })}
      </div>

    </div>
  );
}

export default App;
