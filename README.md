# Before you run the test script:

Before you can run the tests you have to provide your own Trello username and password, api-key and api-token.

## Add your trello username, password, api key and api token in the env.conf file

- Add your username in the ./tests/ui/configs/ui-env.conf.js file
- Add your password in the ./tests/ui/configs/ui-env.conf.js file
- Add your api key in the ./tests/api/configs/api-env.conf.js file
- Add your api token in the ./tests/api/configs/api-env.conf.js file

## Create a dotenv file

- Create a .env file in the root directory of this project
- Add your username as: VALID_USERNAME=your_valid_username
- Add your password as: VALID_PASSWORD=your_valid_password
- Add your api key as: API_KEY=your_api_key
- Add your api token as: API_TOKEN=your_api_token

## Add environment variables (if you run the tests in a CI/CD pipeline)

- Add your username as: VALID_USERNAME=your_valid_username
- Add your password as: VALID_PASSWORD=your_valid_password
- Add your api key as: API_KEY=your_api_key
- Add your api token as: API_TOKEN=your_api_token
