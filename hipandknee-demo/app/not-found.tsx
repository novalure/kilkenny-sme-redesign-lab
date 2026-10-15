import Link from "next/link";
import { OrbitArt } from "@/components/OrbitArt";

export default function NotFound() { return <section className="not-found container"><div><span className="eyebrow">PAGE NOT FOUND · 404</span><h1>Let’s find the<br /><em>right direction.</em></h1><p>The page you requested is unavailable. Explore the care areas or return to the beginning.</p><Link className="button button-dark" href="/">Back to home <span aria-hidden="true">↗</span></Link></div><OrbitArt variant="abstract" /></section>; }
