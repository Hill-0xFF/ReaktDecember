import { SetColorProps } from '@/types/setcolor.type';

export default function SetColor({ color, setColor, getColor }: SetColorProps) {
  return (
    <form action="" onSubmit={(evt) => evt.preventDefault()}>
      <label htmlFor="addColor">Add Color</label>
      <input
        type="text"
        name="addColor"
        id="addColor"
        placeholder="Add color name"
        value={color}
        onChange={(evt) => {
          setColor(evt.target.value);
          getColor(evt.target.value);
        }}
      />
    </form>
  );
}
