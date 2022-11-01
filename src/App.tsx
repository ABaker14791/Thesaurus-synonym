import styles from "./styles/index.module.css";
import { useState } from "react";

type Synonym = {
  word: string;
  score: number;
};

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);

  // Using Fetch API
  const fetchWord = (word: string) => {
    const res = fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
      .then((res) => res.json())
      .then(setSynonyms);
  };

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
      <ul>
        {synonyms.map((synonym) => (
          <li key={synonym.word} className={styles.word_block}>
            <p>{synonym.word}</p>
            <p>{synonym.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
