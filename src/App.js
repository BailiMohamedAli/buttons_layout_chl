import Button from "./components/buttons/Button";

function App() {
  return (
    <div>
      <h1>main App layout</h1>
      <hr />
      <Button />
      <hr />
      <Button text="test 01" variant="outline" />
      <hr />
      <Button text="test 02" variant="text"/>
      <hr />
      <h3>test boxShadow</h3>
      <p>shadow: false</p>
      <Button disableShadow={true}/> 
      <p>shadow: true</p>
      <Button disableShadow={false}/> 
      <h2>test 2</h2>
      <p>shadow: false</p>
      <Button variant="outline" disableShadow={true}/> 
      <p>shadow: true</p>
      <Button variant="outline" disableShadow={false}/> 
      <hr />
      <h3>Disabled button</h3>
      <p>disabled true</p>
      <Button text="test 02" disabled={true}/>
      <p>disabled true</p>
      <Button text="test 02" variant="text" disabled={true}/>
    </div>
  );
}

export default App;
