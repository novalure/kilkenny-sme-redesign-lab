export function KneeMotionArt() {
  return (
    <svg className="knee-motion-art" viewBox="0 0 620 680" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="knee-aura" cx="0" cy="0" r="1" gradientTransform="translate(313 326) rotate(90) scale(313)">
          <stop stopColor="#8EE8FF" stopOpacity=".31" />
          <stop offset=".55" stopColor="#2AC6F9" stopOpacity=".13" />
          <stop offset="1" stopColor="#2AC6F9" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="knee-bone" x1="200" y1="95" x2="407" y2="565" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset=".31" stopColor="#DDF6FF" />
          <stop offset=".69" stopColor="#A6DBF3" />
          <stop offset="1" stopColor="#E9FAFF" />
        </linearGradient>
        <linearGradient id="knee-bone-shade" x1="252" y1="96" x2="400" y2="568" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity=".03" />
          <stop offset=".5" stopColor="#3079AC" stopOpacity=".25" />
          <stop offset="1" stopColor="#024278" stopOpacity=".5" />
        </linearGradient>
        <linearGradient id="knee-cartilage" x1="210" y1="354" x2="391" y2="407" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C7F4FF" />
          <stop offset=".5" stopColor="#2AC6F9" />
          <stop offset="1" stopColor="#90E8FF" />
        </linearGradient>
        <filter id="knee-bone-glow" x="-30%" y="-20%" width="160%" height="150%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      <circle cx="310" cy="326" r="290" fill="url(#knee-aura)" />
      <g className="knee-orbit">
        <circle cx="310" cy="326" r="251" stroke="#B8EBFF" strokeOpacity=".35" />
        <circle cx="310" cy="326" r="217" stroke="#B8EBFF" strokeOpacity=".24" strokeDasharray="2 11" />
        <circle cx="310" cy="326" r="165" stroke="#B8EBFF" strokeOpacity=".19" />
        <path d="M115 486A250 250 0 0 1 98 187M427 102A250 250 0 0 1 552 295" stroke="#A3EAFF" strokeOpacity=".72" strokeWidth="2" strokeLinecap="round" />
      </g>

      <path className="knee-axis" d="M310 76V579M120 374H503" stroke="#B9EAFF" strokeOpacity=".18" strokeWidth="1" strokeDasharray="4 10" />
      <circle cx="310" cy="379" r="104" stroke="#B9EAFF" strokeOpacity=".22" />
      <circle cx="310" cy="379" r="6" fill="#CBF6FF" />

      <g className="knee-femur">
        <path d="M242 69C237 117 237 166 243 211C248 251 245 272 221 307C206 327 207 354 221 368C233 381 257 384 274 370C285 361 296 353 310 354C326 355 337 369 355 371C379 374 398 357 396 333C394 315 377 296 366 270C350 232 359 161 361 69Z" fill="#8CDDF7" opacity=".3" filter="url(#knee-bone-glow)" />
        <path d="M247 63C243 109 241 162 249 211C254 245 250 273 227 304C211 324 208 345 220 361C231 377 252 378 269 365C283 354 296 349 311 351C327 353 342 368 359 366C380 365 394 350 390 330C386 311 370 293 360 266C346 229 354 159 357 63C321 79 281 79 247 63Z" fill="url(#knee-bone)" stroke="#ECFBFF" strokeWidth="3" />
        <path d="M285 88C276 151 275 212 279 246C284 287 267 317 250 339C261 331 276 325 294 328M340 88C345 151 338 225 334 257C330 290 344 318 367 342" stroke="url(#knee-bone-shade)" strokeWidth="30" strokeLinecap="round" opacity=".55" />
        <path d="M227 339C237 319 258 307 278 312M337 313C358 308 377 321 386 342" stroke="#FFFFFF" strokeOpacity=".82" strokeWidth="4" strokeLinecap="round" />
        <path d="M231 359C250 374 273 357 281 349M333 350C350 366 373 373 388 351" stroke="#2AC6F9" strokeOpacity=".77" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g className="knee-tibia">
        <path d="M224 400C242 388 268 390 289 395C304 399 318 398 330 394C353 387 380 390 393 403C402 411 399 424 387 431C374 439 360 442 356 460C350 488 357 539 365 604C331 614 291 615 255 603C263 543 269 496 265 461C263 442 247 438 231 430C218 424 213 410 224 400Z" fill="#8CDDF7" opacity=".25" filter="url(#knee-bone-glow)" />
        <path d="M223 399C240 390 264 391 285 396C302 400 319 399 334 395C357 389 379 390 390 401C400 410 396 422 386 429C373 438 360 443 356 460C351 487 357 540 365 603C333 613 291 613 256 603C264 544 269 495 266 460C264 440 249 436 232 428C219 421 214 408 223 399Z" fill="url(#knee-bone)" stroke="#E8F9FF" strokeWidth="3" />
        <path d="M272 447C286 455 298 461 309 462C321 462 336 454 350 447M293 474C287 515 284 557 283 595M339 476C343 520 348 559 351 593" stroke="url(#knee-bone-shade)" strokeWidth="17" strokeLinecap="round" opacity=".65" />
        <path d="M232 403C251 396 272 402 288 405C304 409 321 408 337 404C356 399 374 396 389 405" stroke="url(#knee-cartilage)" strokeWidth="8" strokeLinecap="round" />
        <path d="M250 430C268 435 282 443 291 450M371 431C351 435 337 443 329 450" stroke="#FFFFFF" strokeOpacity=".8" strokeWidth="3" strokeLinecap="round" />
        <path d="M401 437C412 448 414 468 409 490L393 571" stroke="#B7EBFB" strokeOpacity=".78" strokeWidth="16" strokeLinecap="round" />
        <path d="M404 448L395 538" stroke="#FFFFFF" strokeOpacity=".58" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g className="knee-patella">
        <path d="M381 334C397 342 403 359 400 380C398 395 389 406 377 408C363 407 353 394 352 376C351 358 359 341 373 335C376 334 379 333 381 334Z" fill="url(#knee-bone)" fillOpacity=".96" stroke="#FFFFFF" strokeOpacity=".83" strokeWidth="2" />
        <path d="M370 344C362 357 359 373 363 386" stroke="#FFFFFF" strokeOpacity=".78" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g className="knee-joint-marker">
        <circle cx="310" cy="379" r="80" stroke="#D7F7FF" strokeOpacity=".7" strokeWidth="1.5" />
        <circle cx="310" cy="379" r="89" stroke="#2AC6F9" strokeOpacity=".55" strokeWidth="1" strokeDasharray="2 7" />
        <path d="M406 379H470" stroke="#A7E9FC" strokeOpacity=".73" />
        <circle cx="478" cy="379" r="3" fill="#C5F4FF" />
        <text x="481" y="369" fill="#E9FAFF" fontFamily="Arial, sans-serif" fontSize="10" letterSpacing="2">JOINT</text>
      </g>
      <text x="115" y="144" fill="#D4F5FF" fillOpacity=".86" fontFamily="Arial, sans-serif" fontSize="10" letterSpacing="2">FEMUR</text>
      <text x="459" y="560" fill="#D4F5FF" fillOpacity=".86" fontFamily="Arial, sans-serif" fontSize="10" letterSpacing="2">TIBIA</text>
    </svg>
  );
}
