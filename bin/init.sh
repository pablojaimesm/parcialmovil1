#!/bin/bash
docker build -t pepe-db:latest ./db

docker build -t app:latest .

docker compose down
docker compose up -d