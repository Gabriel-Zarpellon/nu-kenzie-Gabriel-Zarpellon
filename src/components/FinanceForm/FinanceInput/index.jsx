export function FinanceInput({ label, type, name, placeholder, min }) {
  return (
    <>
      <label className="label" htmlFor={name}>{label}</label>
      <input className="input" type={type} name={name} placeholder={placeholder} min={min} required/>
    </>
  );
}
