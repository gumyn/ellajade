// Fonction pour mélanger un tableau aléatoirement
export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Fonction pour générer un identifiant unique
export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Fonction pour récupérer les scores depuis l'API
export async function fetchScores() {
  const res = await fetch('/api/scores');
  const scores = await res.json();
  return scores;
}

// Fonction pour envoyer les scores à l'API
export async function postScore(playerName, score) {
  const res = await fetch('/api/scores', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ playerName, score }),
  });
  const data = await res.json();
  return data;
}
