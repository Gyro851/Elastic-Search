# Elasticsearch Node.js test

A basic node express app that can index and query elasticsearch. My goal was to learn
Elasticsearch. Hopefully this will be helpful to others.

This repository includes a Docker Compose file to reproduce the environment locally.
Execute the following commands to start and create the index with sample data:

```bash
docker-compose up
# Wait until the elasticsearch container says "started". Then open a new temrinal and import
# data into the index with the following command:
docker exec elasticsearchnodejs_web_1 ./data/load-data.sh
```
http://localhost:3000
