import { cleanEnv, str, url } from "envalid";

const envSchema = {
	// Database
	DATABASE_URL: url(),
	PRISMA_FIELD_ENCRYPTION_KEY: str(),

	// mittwald
	EXTENSION_ID: str(),
	EXTENSION_SECRET: str(),

	// API Key für scheduled Optimierung (optional, für zusätzliche Sicherheit)
	OPTIMIZATION_API_KEY: str({ default: "" }),

	NODE_ENV: str({
		choices: ["development", "test", "production"],
		default: "development",
	}),
};

// Validate and clean the environment
export const env = cleanEnv(process.env, envSchema);
