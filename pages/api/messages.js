// /api/scores.js

let messages = {};

export default function handler(req, res) {
  // if(!req.body) return {}
  console.log(JSON.stringify(req.body));
  try {
    
    
    if (req.method === "POST") {
      // console.log(name, score);
      // console.log(req.body['name'], req.body['score']);
      const { id, text } = JSON.stringify(req.body);
      messages[id] = text;
      console.log(messages);
      res.status(200).json({ message: "Score saved successfully" });
    } else if (req.method === "GET") {
      // console.log(messages);
      res.status(200).json([messages]);
    } else {
      // console.log(messages);
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    // console.log(messages);

    res.status(200).json([messages]);

  }
}
