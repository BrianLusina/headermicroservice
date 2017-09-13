### Header Parser Microservice

Micro service that parses your request header and tells you about your machine's IP address, OS version and preferred language.

Clone the repo:

```bash
$ git clone https://github.com/BrianLusina/headermicroservice.git
$ cd headermicroservice
$ npm install
# or using yarn
$ yarn install
```
> clones repo and installs dependencies


Run the application

```bash
$ node server.js
# or using yarn
$ yarn start
# or using npm
$ npm run start
```

Now you can access the running application on your local server on a random port, for example:


localhost:3000/whoami

```json
{
  "ip":"196.207.151.172",
  "lang":"en-US",
  "os":"X11; Linux x86_64"
}
```
> Example output for the given url endpoint.
