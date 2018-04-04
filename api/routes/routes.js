const createUser = require('../controllers/createUser');
const addNote = require('../controllers/addNote');
const login = require('../controllers/login');
const getNotes = require('../controllers/getNotes');
const modifyNote = require('../controllers/modifyNote');
const deleteNote = require('../controllers/deleteNote');
const authenticate = require('../controllers/authenticate');


module.exports = server => {
  server.get('/api/notes', authenticate, getNotes);
  server.route('/api/notes').post(addNote);
  server.route('/api/notes').put(modifyNote);
  server.route('/api/notes').delete(deleteNote);
  server.route('/api/users').post(createUser);
  server.route('/api/login').post(login);
};
