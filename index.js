var AppDispatch = require('./appdispatcher.js')
  , extend = function(to,add) {
      for(var k in add) {
          to[k] = add[k];
      }
      return to;
  }
  
  , actions = [];

module.exports = {
    
    register: function(name) {
        if(typeof name === 'object' && name && name.length)
            [].push.apply(actions, name);
        else if(actions.indexOf(name)==-1)
            actions.push(name);
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