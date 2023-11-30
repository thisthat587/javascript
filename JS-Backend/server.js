import express from 'express';

const app = express();

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "The Shovel",
      content: "I'm reading a book on anti-gravity. It's impossible to put down!"
    },
    {
      id: 2,
      title: "Restaurant",
      content: "I told the waitress I wanted a quick meal. She gave me a picture of her running!"
    },
    {
      id: 3,
      title: "Lightbulb",
      content: "How many programmers does it take to change a light bulb? None, that's a hardware issue!"
    },
    {
      id: 4,
      title: "Piano",
      content: "Why did the piano break up with the accordion? It found the accordion's behavior to be very melodious."
    },
    {
      id: 5,
      title: "Books",
      content: "Why did the librarian get kicked off the plane? Because it was overbooked!"
    }
  ];

  res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("GOOD TO GO.....");
})
