require('dotenv').config();
const md5 = require('md5');
const fetch = require('node-fetch')

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ts = Date.now();
const hash = md5(`${ts}${PRIVATE_KEY}${PUBLIC_KEY}`)
const URL = `http://gateway.marvel.com/v1/public/characters?name=Spider-Man&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`

// let response = fetch()

fetch(URL)
  .then(resp => resp.json())
  .then(json => {
    console.log(json.data.results);
  });

// 