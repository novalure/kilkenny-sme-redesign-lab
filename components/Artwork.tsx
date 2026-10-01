type ArtworkProps = {
  kind:
    "hero" | "flower" | "halo" | "diamond" | "craft" | "bespoke" | "wedding";
  label?: string;
};

export function Artwork({ kind, label }: ArtworkProps) {
  return (
    <div
      className={`artwork art-${kind}`}
      role="img"
      aria-label={
        label ||
        "Abstract concept artwork; not a Yvonne Ross product photograph"
      }
    >
      <div className="art-grain" />
      <div className="art-halo" />
      <div className="art-ring">
        <span className="art-setting">
          <span className="art-gem" />
        </span>
      </div>
      <div className="art-shadow" />
      <span className="art-caption">
        Concept visual · photography to follow
      </span>
    </div>
  );
}
