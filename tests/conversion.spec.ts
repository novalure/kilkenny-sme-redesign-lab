import { expect, test } from "@playwright/test";

const base = "/demos/yvonne-ross";

test("desktop hero exposes contact, Google reviews and studio directions", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(base);
  const contact = page.locator(".header-contact");
  await expect(contact).toBeVisible();
  await expect(contact).toHaveAttribute("data-event", "contact_header_click");
  const heroReview = page.locator(".hero-review");
  await expect(heroReview).toBeInViewport();
  await expect(heroReview).toContainText("4.6");
  await expect(heroReview).toHaveAttribute("data-event", "google_reviews_click");
  await expect(heroReview).toHaveAttribute("href", /google\.com\/maps/);
  await expect(page.getByRole("link", { name: "Read reviews on Google", exact: true })).toBeVisible();
  await page.locator(".studio-map-col").scrollIntoViewIfNeeded();
  await expect(page.locator(".leaflet-control-attribution")).toContainText("OpenStreetMap contributors");
  await expect(page.locator(".studio-actions a").first()).toHaveAttribute("href", /google\.com\/maps\/dir/);
  await expect(page.locator(".mobile-call")).toBeHidden();
  await contact.click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.locator("form")).toBeVisible();
});

test("mobile rating, swipe reel and persistent call fit the viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto(base);
  const call = page.locator(".mobile-call");
  const rating = page.locator(".hero-review");
  await expect(call).toBeVisible();
  await expect(call).toHaveAttribute("href", "tel:+353877799430");
  await expect(rating).toBeInViewport();
  const callBox = await call.boundingBox();
  const ratingBox = await rating.boundingBox();
  expect(callBox).not.toBeNull();
  expect(ratingBox).not.toBeNull();
  expect(ratingBox!.y + ratingBox!.height).toBeLessThanOrEqual(callBox!.y + 1);
  await page.locator("#jewellery").scrollIntoViewIfNeeded();
  const reel = page.locator(".jewellery-reel");
  const initial = await reel.evaluate((element) => element.scrollLeft);
  await page.getByRole("button", { name: "Next pieces" }).click();
  await expect.poll(() => reel.evaluate((element) => element.scrollLeft)).toBeGreaterThan(initial);
  await expect(call).toBeVisible();
  expect(await page.evaluate(() => document.body.scrollWidth)).toBe(375);
  await expect(page.getByRole("button", { name: "Menu" })).toBeVisible();
});

test("secondary routes expose calls to action and preserve the map", async ({ page }) => {
  for (const [route, action] of [
    ["bespoke", /discuss a commission/i],
    ["engagement-wedding", /discuss your ring/i],
  ] as const) {
    await page.goto(`${base}/${route}`);
    await expect(page.locator(".route-hero h1")).toBeVisible();
    await expect(page.locator(".route-hero").getByRole("link", { name: action })).toBeVisible();
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
