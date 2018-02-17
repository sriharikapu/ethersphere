NAME := $(shell basename $$PWD | sed -e s/[\\.-]//g)

## start server
serve:
	docker exec -it ${NAME}_web_1 npm start

## start workers
work:
	docker exec -it ${NAME}_web_1 npm run start:workers

## Runs webpack (development)
webpack:
	docker exec -it ${NAME}_web_1 npm run dev

## start docker shell
shell:
	docker exec -it ${NAME}_web_1 /bin/bash

## start mongo client
mongo-client:
	docker exec -it ${NAME}_mongo_1 mongo

## Run tests
test-server:
	docker exec -it ${NAME}_web_1 npm run test-server

## Run tests
test:
	docker exec -it ${NAME}_web_1 npm test

## Run tests
test-client:
	docker exec -it ${NAME}_web_1 npm run test-client

## Fill local db with some bootstrapped data
seed:
	docker exec -it ${NAME}_mongo_1 mongorestore --uri=mongodb://localhost:27017/app --gzip --archive=/host-db/seed.gz --drop

export-seed:
	docker exec -it ${NAME}_mongo_1 mongodump --uri=mongodb://localhost:27017/app --gzip --archive=/host-db/seed.gz

# Login to AWS registry (must have docker running)
docker_registry_login:
	$$(aws ecr get-login --no-include-email --region us-east-1 --profile=coincircle)

# Build docker target
docker_build:
	docker build -f scripts/docker/Dockerfile --no-cache -t coincircle/web .

# Tag docker image
docker_tag_image:
	docker tag coincircle/web:latest 845705745673.dkr.ecr.us-east-1.amazonaws.com/coincircle/web:latest

# Push to registry
docker_registry_push:
	docker push 845705745673.dkr.ecr.us-east-1.amazonaws.com/coincircle/web:latest

# Build docker image and push to AWS registry
docker_build_and_push: docker_registry_login docker_build docker_tag_image docker_registry_push

# deploy
deploy:
	aws ecs update-service --cluster="arn:aws:ecs:us-east-1:845705745673:cluster/coincircle-web-cluster" --service="arn:aws:ecs:us-east-1:845705745673:service/coincircle-web-service-fgt" --force-new-deployment --region=us-east-1 --profile=coincircle
