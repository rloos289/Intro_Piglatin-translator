# _Template_

#### By _Ryan Loos and Ben Vissotzky_

## Description

_A site for translating the user's input into pig latin_

## Setup/Installation Requirements

* _Copy the repository from GitHub_
* _Open the index.html file a browser of your choice_
* _Open the console to confirm that javascript and jQuery are running_

## BDD
- return true if input is text: 'text': true
- return false if input contains numbers: 'h1 there' : false
- return first letter of the word : 'apple' : 'a'
- return true if vowel: 'a','e',etc (not y) : true
- for words beginning with a vowel, add 'ay' to the end: 'apple' : 'appleay'
- recognize first vowel, separate preceding consonants: 'translate' : 'tr'
  - if first consonants include 'qu', include 'u' with preceding consonants: 'squeal' : true
  - move all of the first consecutive consonants to the end: 'translate': 'anslatetr'
  - For words beginning with one or more consonants, add 'ay': 'translate' : 'anslatetray'

## GitHub link
https://rloos289.github.io/Piglatin-translator/
https://github.com/rloos289/Piglatin-translator

## Licensing

* MIT

Copyright (c) 2016 **_Ryan Loos and Ben Vissotzky_**
