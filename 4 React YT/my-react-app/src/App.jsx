import Button from "./Button/Button";
import Button2 from "./Button2";
import Student from "./Student";
function App() {
  const abc = (name)=>{
    alert(`Hello ${name}`);
  }
  return (
    <>
    <Button></Button>
    <Button2></Button2>
    <Student name="Palak" displayName={abc}></Student>
    </>
  );
}

export default App
