import styles from "./styles/index.module.css";
import { useState } from "react";

// Using Fetch API
const fetchWord = async (word: string) => {
  const res = await fetch(`https://api.datamuse.com/words?ml=${word}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!res.ok) {
    throw new Error("Data coud not be fetched!");
  } else {
    return console.log(res.json());
  }
};

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = inputValue;

    fetchWord(data);
  };
  return (
    <div className="App">
      <form action="" className={styles.form}>
        <h1>Thesaurus.</h1>
        <h2>Enter a word to generate a synonym.</h2>
        <label htmlFor="word-input" className={styles.label}>
          Enter your word
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          id="word-input"
          className={styles.input}
        />
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
}

export default App;
