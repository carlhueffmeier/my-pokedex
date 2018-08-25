const app = require('./app');

// Import configuration options from 'variables.env'
require('dotenv').config({ path: 'variables.env' });

// Start server 🔥
app.set('port', process.env.PORT || 7777);
var server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
