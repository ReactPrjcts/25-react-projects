export default function Info({title, text, openFunction, isOpen}){
  console.log("rendInfo");
  return (
    <button className="box" onClick={openFunction}>
      <h3>{title}</h3>
      {isOpen ? <p>{text}</p> : null}

    </button>
  );
}