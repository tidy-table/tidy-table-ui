#!/bin/bash
docker run -it --rm -p 3000:3000 -w /app -v $PWD:/app node npm start
