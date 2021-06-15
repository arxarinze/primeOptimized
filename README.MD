# Installation

- git clone repo
- npm install
- npm run start
- rename .env.example to .env

### OR

- install docker
- git clone repo
- docker build --rm --pull -f "Dockerfile" -t "stably:latest" "./"
- docker run --rm -it -p 8000:8000/tcp stably:latest

# Decisions

I utilized an algorithm known as the **sieve of Eratosthenes** for calculating the prime to the input N,
I actually learnt this algorithm in a course in the university _CSC 202 Data Structure and Algorithms_
However it would be faster to instead of getting the list of numbers between but instead calculating from the input number down till we arrive at the highest prime lower than the input

- I have utilized typescript with the express framework to create the service that solves the specification:
  - Create a web application that takes in a number and returns to the user the highest prime number lower than the input number

# API

### Get Larget Prime Number Lower Tham Input

/POST

localhost:8000/prime

```
{
    number:55
}
```
