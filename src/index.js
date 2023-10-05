const app = require('express')();

app.get('/', (req, res) => {
  res.json({ message: 'my first docker push to github! 🐳' });
});

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`listening on PORT 8080 at http://localhost:${port}`)
);
