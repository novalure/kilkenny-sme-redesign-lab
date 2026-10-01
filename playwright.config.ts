import { defineConfig } from "@playwright/test";
import { existsSync } from "node:fs";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://127.0.0.1:3100",
    browserName: "chromium",
    launchOptions: existsSync("/usr/bin/chromium")
      ? { executablePath: "/usr/bin/chromium" }
      : {},
  },
  webServer: {
    command: "npm run dev -- --hostname 127.0.0.1 -p 3100",
    url: "http://127.0.0.1:3100/demos/yvonne-ross",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
