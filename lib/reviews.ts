import "server-only";
import { studio } from "./yvonne";

export type ReviewSummary = {
  rating: number;
  count: number | null;
  listingUrl: string;
  source: "places" | "snapshot";
  checkedOn: string;
};

type PlacesResponse = {
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
};

export async function getReviewSummary(): Promise<ReviewSummary> {
  const fallback: ReviewSummary = {
    rating: studio.reviewSnapshot.rating,
    count: studio.reviewSnapshot.count,
    listingUrl: studio.googleListing,
    source: "snapshot",
    checkedOn: studio.reviewSnapshot.verifiedOn,
  };
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.YVONNE_GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return fallback;

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,googleMapsUri",
        },
        next: { revalidate: 21600 },
      },
    );
    if (!response.ok) return fallback;
    const data = (await response.json()) as PlacesResponse;
    if (
      !data.displayName?.text?.toLowerCase().includes("yvonne ross") ||
      typeof data.rating !== "number" ||
      data.rating < 0 ||
      data.rating > 5
    )
      return fallback;
    return {
      rating: data.rating,
      count:
        typeof data.userRatingCount === "number" ? data.userRatingCount : null,
      listingUrl: data.googleMapsUri || studio.googleListing,
      source: "places",
      checkedOn: new Date().toISOString().slice(0, 10),
    };
  } catch {
    return fallback;
  }
}
