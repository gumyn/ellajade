// /api/scores.js

let scores = {};

export default function handler(req, res) {
  // if(!req.body) return {}
  try {

    const { name, score } = JSON.parse(req.body);

    if (req.method === "POST") {
      // console.log(name, score);
      // console.log(req.body['name'], req.body['score']);
      scores[name] = score;
      // console.log(scores);
      res.status(200).json({ message: "Score saved successfully" });
    } else if (req.method === "GET") {
      res.status(200).json([scores]);
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {

    res.status(200).json([scores]);

  }
}
