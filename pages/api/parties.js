// pages/api/parties.js

const parties = {};

export default function handler(req, res) {
  try {
    const { numPlayers } = JSON.parse(req.body);
    // console.log(numPlayers);

    if (req.method === 'POST') {
      const { id, name } = req.body;

      // Store the party in the parties object
      parties[id] = { id, name };

      // console.log(parties);
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  } catch (error) {

    res.status(200).json({ success: true });

  }
}
