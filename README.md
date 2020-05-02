# twilio-callcenter-server

# Debugging server locally using VSCode

1. A `launch.json` file is included with some settings to debug the server withi
   VSCode
2. With the project open and in debugger panel. Select 'Launch via NPM'
   This will start a local server and attach it to vscode. Output will be in
   the output window instead of terminal.

# Running server locally in a simulated heroku enviroment

1. Ensure your .env file is created, heroku will load the enviroment variables
2. Run `npm start`
