type ArtworkProps = {
  kind:
    | "hero"
    | "flower"
    | "halo"
    | "diamond"
    | "craft"
    | "bespoke"
    | "wedding"
    | "material";
  label?: string;
};

/** Original abstract form study. Each slot can be replaced by licensed media. */
export function Artwork({ kind, label }: ArtworkProps) {
  return (
    <div
      className={`artwork art-${kind}`}
      role="img"
      aria-label={label || "Abstract concept artwork; not product photography"}
    >
      <div className="art-field" aria-hidden="true" />
      <div className="art-orbit art-orbit-one" aria-hidden="true" />
      <div className="art-orbit art-orbit-two" aria-hidden="true" />
      <div className="art-form" aria-hidden="true" />
      <div className="art-core" aria-hidden="true" />
      <div className="art-glint" aria-hidden="true" />
      <div className="art-coordinate" aria-hidden="true">YR / FORM STUDY</div>
    </div>
  );
}
