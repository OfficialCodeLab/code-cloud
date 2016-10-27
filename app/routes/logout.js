import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Route.extend({
  firebaseApp: service(),

	beforeModel: function() {
		return this.get("session").fetch().catch(function() {});
		
    },
    model (){
	    let auth = this.get('firebaseApp').auth();
	    auth.signOut();
    	this.get('session').close().then(()=> {
      		this.transitionTo('login').then(()=>{
      			window.location.reload(true);
      		});
    	});

    }
});
