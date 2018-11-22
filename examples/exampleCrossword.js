import React from 'react';
import ReactDOM from 'react-dom';
import Crossword from 'crosswords/crossword';

ReactDOM.render(<Crossword data={
  {
    "id":"simple/1",
    "number":1,
    "name":"Simple Crossword 1",
    "date":1542326400000,
    "entries":[
      {
        "id":"1-across",
        "number":1,
        "humanNumber":"1",
        "clue":"Canine (2)",
        "direction":"across",
        "length":3,
        "group":[
          "1-across"
        ],
        "position":{
          "x":0,
          "y":1
        },
        "separatorLocations":{
        },
        "solution":"DOG"
      },
      {
        "id":"2-down",
        "number":2,
        "humanNumber":"2",
        "clue":"Beer Ingredient",
        "direction":"down",
        "length":3,
        "group":[
          "2-down"
        ],
        "position":{
          "x":10,
          "y":10
        },
        "separatorLocations":{
        },
        "solution":"HOP"
      }
    ],
    "solutionAvailable":true,
    "dateSolutionAvailable":1542326400000,
    "dimensions":{
      "cols":13,
      "rows":13
    },
    "crosswordType":"quick"
  }
}/>, document.getElementById('root'));
