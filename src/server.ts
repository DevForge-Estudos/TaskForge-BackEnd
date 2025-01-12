import { fastify } from "fastify";
import { env } from "./env";

const app = fastify();

app
  .listen({ port: env.PORT, host: "0.0.0.0" })
  .then(() => {
    console.log(`Server is running on port: ${env.PORT}`);
  })
  .catch((error) => {
    console.log("Error starting server: ", error);
  });
