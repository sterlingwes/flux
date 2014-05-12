var AppDispatch = require('./appdispatcher.js')
  , extend = require('utils')._extend
  
  , actions = [];

module.exports = {
    
    register: function(name) {
        if(actions.indexOf(name)==-1)
            actions.push(name);
    },
    
    is: function(name) {
        return actions.indexOf(name);
    },
    
    call: function(name,payload) {
        if(actions.indexOf(name)==-1)
            return console.error('No action named '+name+' registered.');
           
        payload = typeof payload === 'object' ? payload : {};
            
        AppDispatch.handleViewAction(extend({
            actionType: name
        }, payload));
    },
    
    Dispatcher: require('./dispatcher'),
    
    AppDispatcher: AppDispatch 
    
};