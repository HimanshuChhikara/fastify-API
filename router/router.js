const userController = require('../controller/userController');
const deviceController = require('../controller/deviceController');

const routes = [
//User Routes
  {
    method : 'GET',
    url : '/getUser',
    handler: userController.getUser
  },
  
  {
    method : 'POST',
    url : '/addUser',
    handler: userController.addUser
  },

  {
    method: 'PUT',
    url: '/updateUser',
    handler: userController.updateUser
  },

  {
    method:'DELETE',
    url : '/deleteUser',
    handler : userController.deleteUser
  },

// Device Routes
  {
    method: 'POST',
    url : '/addDevice',
    handler : deviceController.addDevice
  },

  {
    method:'GET',
    url: '/getDevice',
    handler : deviceController.getDevice
  },

  {
    method:'PUT',
    url : '/updateDevice',
    handler : deviceController.updateDevice
  },

  {
    method: 'DELETE',
    url : '/deleteDevice',
    handler : deviceController.deleteDevice
  }  

]

module.exports = routes