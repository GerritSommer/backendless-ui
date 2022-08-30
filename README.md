# backendless-ui

This is a starter app for [backendless.com](https://backendless.com). 
- Already build in email/password auth with [Ember Simple Auth](https://ember-simple-auth.com/)
- Ember Data Adapter working with the REST Api
- Basic File uploading
- Server mocking with [Mirage](https://www.ember-cli-mirage.com/)

## Prerequisites

* Follow this quick guide to create an application: (https://backendless.com/quick-start-guide-for-rest-api/)[https://backendless.com/quick-start-guide-for-rest-api/]
* create `.env-development` and `.env-production` files at the project root
* Enter your apps `API_URL`, `APPLICATION_ID` and `REST_ID` in those files
* Example:
  ```
  API_URL='https://eu-api.backendless.com'
  APPLICATION_ID='xxxxxxxx-yyyy-zzzz-xxxx-yyyyyyyy'
  REST_ID='xxxxxxxx-yyyy-zzzz-xxxx-yyyyyyyy'
  ```



You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd backendless-ui`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
