export function SocialIcon({ platform }: { platform: "instagram" | "facebook" }) {
  if (platform === "facebook") {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.5 21v-8h2.8l.42-3.2H13.5V7.75c0-.93.26-1.56 1.62-1.56h1.73V3.33A23 23 0 0 0 14.33 3c-2.5 0-4.2 1.52-4.2 4.32V9.8H7.3V13h2.83v8h3.37Z"
        />
      </svg>
    );
  }

  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.25" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.35" cy="6.65" r="1.05" fill="currentColor" />
    </svg>
  );
}
