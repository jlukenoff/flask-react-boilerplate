# Boilerplate for a Flask/React App using Material UI

## Setup

From the project root:

```bash
# Setup the python env
python -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt

# Set up the Typescript/React env
npm install
```

## Developing

### Backend

Run the flask app:

```bash
python server/main.py
```

### Front-end

Build the front-end

```bash
# Build in development mode and pass the --watch flag to webpack
NODE_ENV='development' npm run build -- -w
```
