const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

// Create pool connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'blog_develop',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const rooms = new Map();

// Listening connect Socket
io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('conversation', (data) => {
      getUsers()
        .then((result) => {
          if (result !== null) {
            socket.emit('getUsers', result);
          } else {
            console.log('Query failed. Handle the error or take appropriate action.');
          }
        })
        .catch((error) => {
          console.error('Error in main:', error);
        });
    })
    
    // Join To Room
    socket.on('joinRoom', (roomName, username) => {
        socket.join(roomName);
    
        // Set Room if room not exist;
        if (!rooms.has(roomName)) {
          rooms.set(roomName, new Set());
        }
    
        // Add user to room
        rooms.get(roomName).add(username);
    
        // Send users in room to Client
        io.to(roomName).emit('userList', Array.from(rooms.get(roomName)));
    });
    

    socket.on('disconnect', (socket) => {
        console.log('disconection Successfully!!!');

        // Room of disconnectUser
        // const roomsLeft = Object.keys(socket.rooms).filter(room => room !== socket.id);

        // roomsLeft.forEach(room => {
        //     if (rooms.has(room)) {
        //       // remove user out of room
        //       rooms.get(room).delete(socket.username);
      
        //       // Send users in room to Client after user left room
        //       io.to(room).emit('userList', Array.from(rooms.get(room)));
        //     }
        //   });
    })
});

//=================================================================================================================================//
// QUERY WITH DATABASE //

// get users
async function getUsers() {
  try {
    // Get a connection from pool
    const connection = await pool.getConnection();

    // execute query
    const [rows, fields] = await connection.query('SELECT * FROM m_user where del_flg = 0');

    // Release connection after used
    connection.release();

    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
    return null;
  }
}

// post user
async function addUser(username, email, password) {
  try {
    // Get a connection from pool
    const connection = await pool.getConnection();

    // execute query
    const [result] = await connection.query('INSERT INTO m_user (user_name, email, password) VALUES (?, ?, ?)', [username, email, password]);
    const insertedUserId = result.insertId;
    const data = { id: insertedUserId, username, email, password };

    // Release connection after used
    connection.release();

    return data;
  } catch (error) {
    console.error('Error executing query:', error);
    return null;
  }
}

// get user by id
async function getUserById(userId) {
  try {
    // Get a connection from pool
    const connection = await pool.getConnection();

    // execute query
    const [rows, fields] = await connection.query('SELECT * FROM m_user where del_flg = 0 AND id = ' + userId);

    // Release connection after used
    connection.release();

    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
    return null;
  }
}


// Initialize Server
app.get('/', (req, res) => res.send('Server started!'));

// Get User
app.get('/users', async (req, res) => {
  try {
    const result = await getUsers();

    res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

// Post User
app.post('/user', async (req, res) => {
  try {
    const { username, email, password } = req.body;
  
    if (!username || !password || !email) {
      return res.status(400).json({ error: 'Username and password and email are required' });
    }

    const result = await addUser(username, email, password);
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

// Get User By Id
app.get('/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
  
    if (!userId || userId === '') {
      return res.status(400).json({ error: 'userId are required' });
    }

    const result = await getUserById(userId);
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});