import { useState } from "react";

function Alphabet() {
  const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [inputAlpha, setInputAlpha] = useState('');

  const [alphabet2, setAlphabet2] = useState([
    {
      id: 1,
      alpha: 'a'
    },

    {
      id: 2,
      alpha: 'p'
    },

    {
      id: 3,
      alpha: 'p'
    },

    {
      id: 4,
      alpha: 'l'
    },

    {
      id: 5,
      alpha: 'e'
    },
  ]);

  const addAlpha = () => {
    const newAlpha = alphabet2.concat({
      id: alphabet2.length + 1,
      alpha: inputAlpha
    });

    setAlphabet2(newAlpha);
    setInputAlpha('');
  };

  return (
    <>
      <ol>
        {/* map */}
        {/* {alphabet.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })} */}
        {alphabet2.map((value) => (
          <li key={value.id}>{value.alpha}</li>
        ))}
      </ol>


      <input type="text" placeholder="알파벳 입력" value={inputAlpha} onChange={(e) => {
        setInputAlpha(e.target.value);
      }} />
      <button onClick={addAlpha}></button>
    </>
  );
}

export default Alphabet;