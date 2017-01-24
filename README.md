# teide-example

Demo using @lab009 tools

## Getting Started

### Setup

```
git clone https://github.com/lab009/teide-example
cd teide-example
npm install
npm start
```

### File Structure

- `bin` - compiling and serve files
- `config` - setting application
- `local_modules` - additional modules
- `src/client` - client application files
- `src/server` - server  application files
- `src/shared` - universal application files
  - `actions` - Redux actions
  - `components` - dump component
  - `containers` - smart components
  - `core` - setup Redux
  - `reducers` - Redux reducers
  - `routes` - application routes
  - `utils` - application helpers

### Tasks

```
npm run <task>
```

* `lint` - source code linting
* `lint:js:fix` - autofix linting for js file
* `clean` - remove compile files
* `start` - start server in development mode (via nodemon)
* `compile:dev` - assembly files for client in *development* mode
* `compile:prod` - assembly files for client in *production* mode
