import { dotEnvConfig } from "../../deps.ts";

dotEnvConfig({ export: true });

export const ID = Deno.env.get("APP_ID") as string;
export const NAME = Deno.env.get("APP_NAME") as string;
export const TOKEN = Deno.env.get("APP_TOKEN") as string;
