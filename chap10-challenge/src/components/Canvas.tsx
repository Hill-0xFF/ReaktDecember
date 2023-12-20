type CanvasProps = {
  color: string;
};

export default function Canvas({ color }: CanvasProps) {
  return (
    <main>
      {color?.length ? (
        <div className="canvas" style={{ backgroundColor: color }}></div>
      ) : (
        <div className="canvas">
          <p>Empty Value</p>
        </div>
      )}
    </main>
  );
}
