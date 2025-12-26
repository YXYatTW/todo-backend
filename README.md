
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

## Architecture & File Structure
```
src/
└── tasks/
├── dto/                  # Data Transfer Objects (Input Validation)
│   └── update-task.dto.ts
├── entities/             # Database Models
│   └── task.entity.ts
├── mappers/              # Data Transformation Logic
│   └── task.mapper.ts
├── tasks.controller.ts   # API Layer (Routes)
├── tasks.service.ts      # Business Logic Layer
├── tasks.repository.ts   # Data Access Layer (DAO)
└── tasks.module.ts       # Dependency Injection
```


### Docker
To run the application using Docker, follow these steps:
1. Build the Docker image:
   ```bash
   docker build -t todo-backend .
   ```
   
2. Run the Docker container:
   ```bash
    docker run -p 3001:3001 todo-backend
    ```
   
### Swagger API Documentation
Once the application is running, you can access the Swagger API documentation at:
http://localhost:3001/api
   

