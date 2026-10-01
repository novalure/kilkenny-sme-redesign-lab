import { expect, test } from "@playwright/test";

const base = "/demos/yvonne-ross";

test("editorial home leads to bespoke, verified reviews and studio directions", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(base);
  const contact = page.locator(".header-contact");
  await expect(contact).toBeVisible();
  await expect(contact).toHaveAttribute("data-event", "contact_header_click");
  await expect(page.locator(".editorial-hero h1")).toContainText("Jewellery, made personal.");
  await expect(page.locator(".editorial-hero-link")).toHaveAttribute("href", /\/bespoke$/);
  const reviews = page.locator(".editorial-trust a");
  await expect(reviews).toContainText("4.6");
  await expect(reviews).toHaveAttribute("href", /google\.com\/maps/);
  await expect(page.locator(".work-piece")).toHaveCount(3);
  await expect(page.locator('a[href*="/shop"]')).toHaveCount(0);
  await page.locator(".studio-map-col").scrollIntoViewIfNeeded();
  await expect(page.locator(".leaflet-control-attribution")).toContainText("OpenStreetMap contributors");
  await expect(page.locator(".studio-actions a").first()).toHaveAttribute("href", /google\.com\/maps\/dir/);
  await expect(page.locator(".mobile-call")).toBeHidden();
  await contact.click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.locator("form")).toBeVisible();
});

test("mobile gallery, menu and persistent call fit the viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto(base);
  const call = page.locator(".mobile-call");
  await expect(call).toBeVisible();
  await expect(call).toHaveAttribute("href", "tel:+353877799430");
  await page.locator("#jewellery").scrollIntoViewIfNeeded();
  await expect(page.locator(".work-piece")).toHaveCount(3);
  await expect(page.locator(".work-piece").first().locator("img")).toHaveJSProperty("complete", true);
  await expect(call).toBeVisible();
  expect(await page.evaluate(() => document.body.scrollWidth)).toBe(375);
  const menu = page.getByRole("button", { name: "Menu" });
  await menu.click();
  await expect(page.locator(".menu-toggle")).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: /bespoke/i })).toBeVisible();
});

test("secondary routes expose calls to action and preserve the map", async ({ page }) => {
  for (const [route, action] of [
    ["bespoke", /discuss a commission/i],
    ["engagement-wedding", /discuss your ring/i],
  ] as const) {
    await page.goto(`${base}/${route}`);
    await expect(page.locator(".route-hero h1")).toBeVisible();
    await expect(page.locator(".route-hero").getByRole("link", { name: action })).toBeVisible();
    await expect(page.locator(".route-art img")).toHaveJSProperty("complete", true);
  }
  await page.goto(`${base}/contact`);
  await page.locator(".studio-map-col").scrollIntoViewIfNeeded();
  await expect(page.locator(".leaflet-control-attribution")).toContainText("OpenStreetMap contributors");
  await expect(page.locator(".contact-direct a[data-event='directions_click']")).toHaveAttribute("href", /google\.com\/maps\/dir/);
});

test("demo enquiry validates phone preference and sends no request", async ({ page }) => {
  await page.goto(`${base}/contact`);
  const outgoing: string[] = [];
  page.on("request", (request) => { if (request.method() !== "GET") outgoing.push(request.url()); });
  await page.locator('[name="name"]').fill("Local QA");
  await page.locator('[name="email"]').fill("qa@example.com");
  await page.locator('[name="interest"]').selectOption({ label: "Bespoke Commission" });
  await page.locator('[name="message"]').fill("Browser-only demonstration");
  await page.getByRole("radio", { name: "Phone" }).check();
  await page.getByRole("button", { name: /send my enquiry/i }).click();
  expect(await page.locator('[name="phone"]').evaluate((input: HTMLInputElement) => input.validity.valueMissing)).toBe(true);
  await page.locator('[name="phone"]').fill("+353 123456789");
  await page.getByRole("button", { name: /send my enquiry/i }).click();
  await expect(page.getByText("Enquiry flow preview complete.")).toBeVisible();
  expect(outgoing).toEqual([]);
});
