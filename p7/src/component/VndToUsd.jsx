export default function VndToUsd({ onChange, vnd }) {
  return (
    <div>
      <label htmlFor="vnd">VND</label>
      <input type="number" id="vnd" value={vnd} onChange={onChange} />
    </div>
  );
}
