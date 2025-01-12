import dotenv from "dotenv";
import { z } from "zod";

// Carrega o arquivo .env
dotenv.config();

// Define o esquema de validação com Zod
const envSchema = z.object({
  DATABASE_URL: z.string().nonempty("DATABASE_URL é obrigatório"),
  PORT: z.string().regex(/^\d+$/, "PORT deve ser um número").transform(Number), // Converte para número
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

// Valida as variáveis de ambiente e trata erros
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Erro ao validar as variáveis de ambiente:", parsedEnv.error.format());
  throw new Error("Configuração inválida no arquivo .env");
}

// Exporta as variáveis validadas como um objeto `env`
export const env = parsedEnv.data;
