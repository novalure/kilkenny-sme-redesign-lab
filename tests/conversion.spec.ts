import { expect, test } from "@playwright/test";

const base = "/demos/yvonne-ross";

test("desktop contact, reviews and studio paths are usable", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(base);
  await expect(
    page.getByRole("link", { name: /contact yvonne/i }).first(),
  ).toBeVisible();
  await expect(page.locator(".trust-strip")).toContainText("4.6");
  await expect(
    page.getByRole("link", { name: /read reviews on google/i }),
  ).toBeVisible();
  await expect(page.locator(".leaflet-control-attribution")).toContainText(
    "OpenStreetMap contributors",
  );
  await expect(page.locator(".studio-actions a").first()).toHaveAttribute(
    "href",
    /google\.com\/maps\/dir/,
  );
  await expect(page.locator(".mobile-call")).toBeHidden();
  await page
    .getByRole("link", { name: /contact yvonne/i })
    .first()
    .click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.locator("form")).toBeVisible();
});

test("mobile call remains visible and map does not cover it", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(base);
  const call = page.locator(".mobile-call");
  await expect(call).toBeVisible();
  await expect(call).toHaveAttribute("href", "tel:+353877799430");
  await page.locator("#visit").scrollIntoViewIfNeeded();
  await expect(call).toBeVisible();
  const callBox = await call.boundingBox();
  expect(callBox).not.toBeNull();
  expect(callBox!.y + callBox!.height).toBeLessThanOrEqual(813);
  await expect(page.getByRole("button", { name: "Menu" })).toBeVisible();
  expect(await page.evaluate(() => document.body.scrollWidth)).toBe(375);
});

test("demo enquiry validates phone preference and sends no request", async ({
  page,
}) => {
  await page.goto(`${base}/contact`);
  const outgoing: string[] = [];
  page.on("request", (request) => {
    if (request.method() !== "GET") outgoing.push(request.url());
  });
  await page.locator('[name="name"]').fill("Local QA");
  await page.locator('[name="email"]').fill("qa@example.com");
  await page
    .locator('[name="interest"]')
    .selectOption({ label: "Bespoke Commission" });
  await page.locator('[name="message"]').fill("Browser-only demonstration");
  await page.getByRole("radio", { name: "Phone" }).check();
  await page.getByRole("button", { name: /send my enquiry/i }).click();
  expect(
    await page
      .locator('[name="phone"]')
      .evaluate((input: HTMLInputElement) => input.validity.valueMissing),
  ).toBe(true);
  await page.locator('[name="phone"]').fill("+353 123456789");
  await page.getByRole("button", { name: /send my enquiry/i }).click();
  await expect(page.getByText("Enquiry flow preview complete.")).toBeVisible();
  expect(outgoing).toEqual([]);
});
