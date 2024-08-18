import './App.css'
import Info from './components/Info'
import {useState} from "react";

const data = [
  {title: "What are accordion components?", text: "Anyone who is young. Take the time and do these. I'm old now and life makes it harder to learn.  It's impossible to sit down. For more than 1 or 2 hours and study. Too much obligations."},
  {title: "What are they used for?", text: "if anyone facing any problems ( which you will ) instead of writing setProducts like what he wrote in the video . type it this way  setProducts(() => [...products, ...result.products]);  , because when you pass a parameter to the call "},
  {title: "Accordion as musical instrument", text: "i am 22 year old and  staying at 2:09:00,everything here is too difficult for me but i will complete it to the end, never give up !!!!!!!!!!!!!!!!!!!!!!!!!!!"},
  {title: "Can I create an accordion component?", text: "On the 'Star Rating\" project, if you had trouble changing colors on the \"hover' and 'mouseover' states, another way to do it is to have two sets of stars you can toggle between. For example, if a user clicks, or their "}]

function App() {
  const initialIsOpen = [];
  for (let i = 0; i < data.length; i++) {
    initialIsOpen.push(false);
  }
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [multiSelection, setMultiSelection] = useState(false);

  function handleOpen(index, isMultiSelection) {
    setIsOpen((prev) => {
      let newArray = [];
      if (isMultiSelection) {
        newArray = [...prev];
      } else{
        newArray = [false, false, false, false];
      }
      if (prev[index] === true){
        newArray[index] = false;
      } else{
        newArray[index] = true;
      }
      console.log(newArray);
      return newArray;
    });
  }
  function handleMultiSelection() {
    if (multiSelection) {
      setMultiSelection(false);
    } else{
      setMultiSelection(true);
    }
  }

  console.log("renderizado");
  return (
    <div className="container">
      <button className="box" onClick={handleMultiSelection}>Enable Multi Selection</button>
      <ol>
        {data.map((item, index) => (
          <li key={index}>
            <Info title={item.title} text={item.text} openFunction={() => handleOpen(index, multiSelection)} isOpen={isOpen[index]} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App
