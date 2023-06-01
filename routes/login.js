// index.js
const express = require('express');
const exphbs  = require('express-handlebars');
const mysql = require('mysql2');

const app = express();
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Set the views directory
app.set('views', 'views');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Define a route to render the login.handlebars file
app.get('/', (req, res) => {
  res.render('login');
});

// Define a route to handle the login form submission
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Perform database query for authentication
  db.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
    if (error) {
      console.error(error);
      // Handle database error
      return;
    }

    if (results.length === 0 || password !== results[0].password) {
      // Authentication failed
      res.render('login', { error: 'Invalid credentials' });
    } else {
      // Authentication successful
      res.render('dashboard');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Handlebar features for Login.html
// fetch('login.hanldebars')
//     .then(response => response.text())
//     .then(templateSource => {
//         var template = handlebars.compile(templateSource);

//         // Render the template
//         var renderedHtml = template();
//         document.getElementById("login-container").innerHTML = renderedHtml;
//     });

// // Server-side code
// const express = require('express');
// const mysql = require('mysql2');

// const app = express();
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'your_username',
//     password: 'your_password',
//     database: 'users'
// });

// app.use(express.urlencoded({ extended: true}));

// app.post('/login', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.username;

//     db.query('SELET *FROM users WHERE username = ?', [username], (error, results) => {
//         if (error) {
//             console.error(error);
//             return;
//         }

//         if (results.length === 0 || password !== results[0].password) {
//             res.redirect('/login?error=invalid_credentials');
//         } else {
//             res.redirect('/dashboard');
//         }
//     });
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });