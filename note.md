name: Python application

on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    env:
        HEROKU_API_KEY: ${{ secrets.HEROKU_API_KEY }}
    steps:
    - uses: actions/checkout@v2
    - name: Login to Heroku Container registry
      run: heroku container:login
    - name: Build and push
      run: heroku container:push -a myherokuappname web
    - name: Release
      run: heroku container:release -a myherokuappname web




front-end:
npm start

back-end:
pipenv shell
flask run