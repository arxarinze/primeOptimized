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

# Concept For Optimizing The Algorithm To Get The Largest Prime Number For Web Applications
# API

### Get Larget Prime Number Lower Tham Input

/POST

localhost:8000/prime

```
{
    number:55
}
```
