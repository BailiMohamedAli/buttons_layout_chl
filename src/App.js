import Button from "./components/buttonCss/Button";
// import ButtonSpe from "./components/buttons/ButtonSpe";

function App() {

  return (
    <div>
      <Button />
      <hr/>
      <Button color="primary"/>
      <hr/>
      <Button color="primary" disableShadow/>
      <hr/>
      <Button color="secondary"/>
      <hr/>
      <Button color="danger"/>
      <hr/>
      <Button variant="outline"/>
      <hr/>
      <Button variant="text"/>
      <hr/>
      <Button color="danger" disabled={true} />
      <hr/>
      <Button variant="text" color="danger" disabled={true} />
    </div>
    // <div>
    //   <h1>main App layout</h1>
    //   <hr />
    //   <ButtonSpe color="danger"/>
    //   <hr />
    //   <ButtonSpe text="test 01" variant="outline" />
    //   <hr />
    //   <ButtonSpe text="test 02" variant="text"/>
    //   <hr />
    //   <h3>test boxShadow</h3>
    //   <p>shadow: false</p>
    //   <ButtonSpe disableShadow={true} size="lg" /> 
    //   <p>shadow: true</p>
    //   <ButtonSpe disableShadow={false} size="sm"/> 
    //   <h2>test 2</h2>
    //   <p>shadow: false</p>
    //   <ButtonSpe variant="outline" disableShadow={true}/> 
    //   <p>shadow: true</p>
    //   <ButtonSpe variant="outline" disableShadow={false}/> 
    //   <hr />
    //   <h3>Disabled button</h3>
    //   <p>disabled true</p>
    //   <ButtonSpe text="test 02" disabled={true}/>
    //   <p>disabled true</p>
    //   <ButtonSpe text="test 02" variant="text" disabled={true} endIcon="code" />
    //   <hr/>
    // </div>
  );
}

export default App;
