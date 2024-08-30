const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// CSRF対策のためのライブラリをインストールする場合は、ここで設定
// const csrf = require('csurf');
// app.use(csrf({ cookie: true }));

app.post('/submit', (req, res) => {
  const { company, name, phone, email, message } = req.body;
  // サーバー側のバリデーションや処理をここに追加
  console.log({ company, name, phone, email, message });
  res.status(200).send('Form submitted successfully.');
});

// サーバーを起動
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
