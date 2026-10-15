export function OrbitArt({ variant = "hip", className = "" }: { variant?: "hip" | "knee" | "abstract"; className?: string }) {
  return <svg className={`orbit-art ${className}`} viewBox="0 0 600 650" fill="none" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id={`art-grad-${variant}`} x1="70" y1="40" x2="520" y2="610" gradientUnits="userSpaceOnUse"><stop stopColor="#E9F1E5"/><stop offset=".48" stopColor="#A6C6B7"/><stop offset="1" stopColor="#527D77"/></linearGradient>
      <linearGradient id={`art-line-${variant}`} x1="150" y1="80" x2="480" y2="590" gradientUnits="userSpaceOnUse"><stop stopColor="#FCFAF4" stopOpacity=".85"/><stop offset="1" stopColor="#E7EFE7" stopOpacity=".14"/></linearGradient>
    </defs>
    <circle cx="300" cy="316" r="264" fill={`url(#art-grad-${variant})`} opacity=".91"/>
    <circle cx="300" cy="316" r="222" stroke="#F8F8F1" strokeOpacity=".5"/>
    <circle cx="300" cy="316" r="185" stroke="#F8F8F1" strokeOpacity=".34"/>
    <circle cx="300" cy="316" r="140" stroke="#F8F8F1" strokeOpacity=".23"/>
    {variant === "knee" ? <>
      <path d="M246 50c-7 71-2 119 18 170 12 33 39 56 70 66 37 12 63 45 59 85-4 36-26 58-51 75-31 21-42 52-37 116" stroke={`url(#art-line-${variant})`} strokeWidth="38" strokeLinecap="round"/>
      <path d="M359 55c-5 71-5 115-18 150-18 47-66 73-87 106-18 28-10 61 15 82 33 29 52 71 52 164" stroke="#365E58" strokeOpacity=".28" strokeWidth="24" strokeLinecap="round"/>
      <path d="M207 314c58-43 128-29 188 16M211 377c67 29 133 29 182-17" stroke="#FAF9F1" strokeOpacity=".76" strokeWidth="3"/>
    </> : <>
      <path d="M97 170c72-44 138-39 190 10 47 44 46 103 8 141-30 31-85 31-99 79-17 56 7 120 67 178" stroke={`url(#art-line-${variant})`} strokeWidth="34" strokeLinecap="round"/>
      <path d="M489 148c-59-30-116-36-161-7-34 22-48 58-40 91 9 37 51 55 79 83 30 31 25 68 5 95-26 36-24 76-1 132" stroke="#365E58" strokeOpacity=".31" strokeWidth="24" strokeLinecap="round"/>
      <circle cx="302" cy="297" r="75" fill="#EDF3EB" fillOpacity=".4" stroke="#F9F8EF" strokeWidth="3"/>
      <circle cx="302" cy="297" r="43" stroke="#365E58" strokeOpacity=".48" strokeWidth="2"/>
      <path d="M370 335c66 40 122 101 131 168" stroke="#F9F8EF" strokeOpacity=".66" strokeWidth="18" strokeLinecap="round"/>
    </>}
    <path d="M84 509c110 67 273 75 419-5" stroke="#FDFBF5" strokeOpacity=".4" strokeWidth="1.5"/>
    <circle cx="112" cy="132" r="5" fill="#FAF8EF"/><circle cx="513" cy="422" r="5" fill="#FAF8EF"/>
  </svg>;
}
