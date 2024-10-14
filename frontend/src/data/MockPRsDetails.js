export const mockPRDetails = [
    {
      id: 1,
      title: "Add new feature: User authentication",
      author: "johndoe",
      status: "Open",
      description: "This PR adds user authentication functionality using JWT tokens.",
      diffContent: `
        diff --git a/src/auth.js b/src/auth.js
        index 1234567..abcdefg 100644
        --- a/src/auth.js
        +++ b/src/auth.js
        @@ -1,5 +1,10 @@
         const jwt = require('jsonwebtoken');
        +const bcrypt = require('bcrypt');
         
        +async function hashPassword(password) {
        +  const salt = await bcrypt.genSalt(10);
        +  return bcrypt.hash(password, salt);
        +}
         
         function generateToken(user) {
           return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        @@ -10,4 +15,9 @@ function verifyToken(token) {
           return jwt.verify(token, process.env.JWT_SECRET);
         }
         
        +async function comparePasswords(plainPassword, hashedPassword) {
        +  return bcrypt.compare(plainPassword, hashedPassword);
        +}
        +
         module.exports = { generateToken, verifyToken };
      `,
      automatedFeedback: [
        { type: 'issue', message: 'Potential security vulnerability in token generation' },
        { type: 'suggestion', message: 'Consider using a more secure hashing algorithm' },
        { type: 'praise', message: 'Good use of async/await in password hashing function' },
      ],
      comments: [
        { id: 1, author: 'reviewer1', content: 'Great work on implementing user authentication!', sentiment: 'positive' },
        { id: 2, author: 'reviewer2', content: 'Have you considered adding rate limiting to prevent brute force attacks?', sentiment: 'neutral' },
        { id: 3, author: 'johndoe', content: "Thanks for the suggestion, I'll add rate limiting in the next commit.", sentiment: 'positive' },
      ],
    },
    {
      id: 2,
      title: "Refactor database queries",
      author: "janedoe",
      status: "In Review",
      description: "This PR refactors our database queries to improve performance.",
      diffContent: `
        diff --git a/src/database.js b/src/database.js
        index 2345678..bcdefgh 100644
        --- a/src/database.js
        +++ b/src/database.js
        @@ -1,8 +1,12 @@
         const { Pool } = require('pg');
         
        -const pool = new Pool();
        +const pool = new Pool({
        +  max: 20,
        +  idleTimeoutMillis: 30000,
        +  connectionTimeoutMillis: 2000,
        +});
         
        -async function getUser(id) {
        -  const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        +async function getUser(id) {
        +  const { rows } = await pool.query('SELECT id, name, email FROM users WHERE id = $1', [id]);
           return rows[0];
         }
      `,
      automatedFeedback: [
        { type: 'praise', message: 'Good job on optimizing the database connection pool' },
        { type: 'suggestion', message: 'Consider adding index on frequently queried columns' },
      ],
      comments: [
        { id: 1, author: 'reviewer3', content: 'The connection pool settings look good. Have you load tested these values?', sentiment: 'positive' },
        { id: 2, author: 'janedoe', content: "Yes, I've run load tests and these values seem to work well for our current traffic.", sentiment: 'positive' },
      ],
    },
  ]