# question-and-answer

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Planning

1. Configuration/dependencies
  * Ember
    *jQuery
    *Bootstrap
  * Firebase
  * Node.js
  

2. Specs
  * User create a Question post which display on the homepage or user can click on the post which takes the user to post-       detailed page. User click 'new question', type in a question about programming, and post will display on the home page. 
  * Another user can answer the question by clicking on the post. User click 'answer post' and type in a response to that       question. Their response will be display under the question post. 

3. Integration
  * Routes for index and post/:post_id
  * Template for index.html (homepage) that displays all question post
  * Template for post/:post_id (post detailed page) that displays answer response to the question post
  

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Heading for all routes-pages
  * Navbar for all pages
  * Make README awesome

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd question-and-answer`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
