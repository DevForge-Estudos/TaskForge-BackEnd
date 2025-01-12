import { fastify } from "fastify";

const app = fastify();

app
  .listen({ port: 3434 })
  .then(() => {
    console.log("Server is running on port 3434");
  })
  .catch((error) => {
    console.log("Error starting server: ", error);
  });
