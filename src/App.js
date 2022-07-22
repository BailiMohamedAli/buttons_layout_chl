import ButtonSpe from "./components/buttons/ButtonSpe";

function App() {
  return (
    <div>
      <h1>main App layout</h1>
      <hr />
      <ButtonSpe />
      <hr />
      <ButtonSpe text="test 01" variant="outline" />
      <hr />
      <ButtonSpe text="test 02" variant="text"/>
      <hr />
      <h3>test boxShadow</h3>
      <p>shadow: false</p>
      <ButtonSpe disableShadow={true}/> 
      <p>shadow: true</p>
      <ButtonSpe disableShadow={false}/> 
      <h2>test 2</h2>
      <p>shadow: false</p>
      <ButtonSpe variant="outline" disableShadow={true}/> 
      <p>shadow: true</p>
      <ButtonSpe variant="outline" disableShadow={false}/> 
      <hr />
      <h3>Disabled button</h3>
      <p>disabled true</p>
      <ButtonSpe text="test 02" disabled={true}/>
      <p>disabled true</p>
      <ButtonSpe text="test 02" variant="text" disabled={true}/>
      <hr/>
    </div>
  );
}

export default App;
