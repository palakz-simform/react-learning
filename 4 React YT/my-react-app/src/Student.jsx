function Student({ name, displayName }) {
  const studentName = "Adi";
  return (
    <>
        {name}
    <button onClick={() => displayName(studentName)}>
      Click me
    </button>
    <li>{name}: {name}</li>
    </>
  );
}

export default Student
