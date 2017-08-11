import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    update(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        note: this.get('note'),
      };
      this.set('updateQuestionForm', false);
      this.set('update', question, params);
    }
  }
});
