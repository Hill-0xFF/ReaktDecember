type CanvasProps = {
  color: string;
  hexValue: string;
};

export default function Canvas({ color, hexValue }: CanvasProps) {
  return (
    <main>
      {color?.length ? (
        <div
          className="canvas"
          style={{ backgroundColor: color, border: 'none' }}
        >
          <p>{hexValue}</p>
        </div>
      ) : (
        <div className="canvas">
          <p>Empty Value</p>
        </div>
      )}
    </main>
  );
}
