import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {

  useEffect(() => {
    startGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const emojis = [

    "📱",
    "💻",
    "🖥️",
    "🖨️",
    "📷",
    "🎥",
    "📹",
    "📟",
    "📠",
    "📺",
    "🎙️",
    "🎚️",
    "🎛️",
    "🕹️",
    "🎮",
    "🎲",
    "🃏",
    "🀄",
    "🎯",
    "🎳",
    "🎰",
    "🎭",
    "🎬",
    "🎨",
    "🖼️",
    "📝",
    "📖",
    "📚",
    "📔",
    "📅",
    "🗓️",
    "📇",
    "🗃️",
    "🗄️",
    "📎",
    "🖇️",
    "📌",
    "📍",
    "📏",
    "📐",
    "✂️",
    "🖊️",
    "🖋️",
    "🖌️",
    "🎁",
    "🎉",
    "🎊",
    "🎈",
    "🎀",
    "🛍️",
    "🎁",
    "📦",
    "🛒",
    "🛍️",
    "🛋️",
    "🛏️",
    "🛌",
    "🚪",
    "🛎️",
    "🔑",
    "🗝️",
    "🛡️",
    "💰",
  ];

  function showToast(message) {
    setToastMessage(message);
    setIsToastHidden(false);
    setTimeout(() => {
      setIsToastHidden(true);
    }, 3000);
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }


  const [toastMessage, setToastMessage] = useState('');
  const [isToastHidden, setIsToastHidden] = useState(true);

  function startGame() {

    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");

    card1.innerHTML = "";
    card2.innerHTML = "";

    let shuffledObjects = shuffle(emojis);
    let nbObjParCarte = 8;

    const arrCard1 = [];
    const arrCard2 = [];
    const matchValue = shuffledObjects[nbObjParCarte - 1];
    for (let i = 0; i < nbObjParCarte - 1; i++) {
      arrCard1.push(shuffledObjects[i]);
    }
    arrCard1.push(matchValue);
    for (let i = nbObjParCarte; i < nbObjParCarte * 2 - 1; i++) {
      arrCard2.push(shuffledObjects[i]);
    }
    arrCard2.push(matchValue);

    let shuffled1 = shuffle(arrCard1);
    let shuffled2 = shuffle(arrCard2);

    for (let i = 0; i < nbObjParCarte - 1; i++) {
      let divCard = document.createElement("div");
      divCard.style.padding = "5px";
      divCard.style.fontSize = "50px";

      if (matchValue === shuffled1[i]) {
        divCard.addEventListener("click", function () {
          // Code à exécuter lorsque l'utilisateur clique sur divCard
          showToast('Gagné !');
          startGame();
        });
      }

      card1.appendChild(divCard).innerHTML = shuffled1[i];
    }
    for (let i = 0; i < nbObjParCarte - 1; i++) {
      let divCard = document.createElement("div");
      divCard.style.fontSize = "50px";
      divCard.style.padding = "5px";

      if (matchValue === shuffled2[i]) {
        divCard.addEventListener("click", function () {
          // Code à exécuter lorsque l'utilisateur clique sur divCard
          showToast('Gagné !');
          startGame();
        });
      }
      card2.appendChild(divCard).innerHTML = shuffled2[i];
    }
  }

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content=" width=device-width, initial-scale=1" />
        <title>Memory Game</title>
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>Memory Game</h1>
        <div className={styles.cards}>
          <div className={styles.card} id="card1"></div>
          <div className={styles.card} id="card2"></div>
        </div>

        <div className={`${styles.toast} ${isToastHidden ? styles.hidden : ""}`}>
          {toastMessage}
        </div>

        <button className={styles.btn} onClick={startGame}>
          New Game
        </button>
      </main>
    </div>
  );
}
