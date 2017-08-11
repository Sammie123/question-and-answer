import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.rental_id);
  },

  actions: {
    update(question, params) {
      Object.key(params).forEach(function(key){
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },

    destoryQuestion(question) {
      question.destoryQuestion();
      this.transitionTo('index');
    }
  }
});
