import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
	host: "0.0.0.0",
	port: process.env.PORT ? Number(process.env.PORT) : 10000,
});

