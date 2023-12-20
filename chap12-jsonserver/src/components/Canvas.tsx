type CanvasProps = {
  color: string;
  hexValue: string;
};

export default function Canvas({ color, hexValue }: CanvasProps) {
  return (
    <main>
      {color?.length ? (
        color?.includes('white') ? (
          <div
            className="canvas"
            style={{ backgroundColor: color, border: 'none', color: 'black' }}
          >
            <p>{hexValue}</p>
          </div>
        ) : (
          <div
            className="canvas"
            style={{ backgroundColor: color, border: 'none' }}
          >
            <p>{hexValue}</p>
          </div>
        )
      ) : (
        <div className="canvas">
          <p>Empty Value</p>
        </div>
      )}
    </main>
  );
}
