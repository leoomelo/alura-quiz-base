/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line react/prop-types
export default function ButtonForm({ name }) {
  return (
    <>
      <button type="submit" disabled={name.length === 0}>
        {name}
      </button>
    </>
  );
}
