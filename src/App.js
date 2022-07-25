import Button from "./components/buttonCss/Button";
// import ButtonSpe from "./components/buttons/ButtonSpe";

function App() {

  return (
    <div>
      <Button size="sm" />
      <hr />
      <Button size="md" />
      <hr />
      <Button size="lg" />
      <hr />
      <Button startIcon="Adb" />
      <hr />
      <Button endIcon="Adb" />
    </div>
  );
}

export default App;
