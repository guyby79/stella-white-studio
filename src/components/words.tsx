/** Splits a sentence into spans so the Motion script can light them up on scroll. Plain text without JS. */
export default function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="w">
          {w}{" "}
        </span>
      ))}
    </>
  );
}
