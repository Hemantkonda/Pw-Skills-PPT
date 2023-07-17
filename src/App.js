import Person from './components/Person';
import Button from './components/Button';
import Header from './components/Header';
import List from './components/List';

function App() {
  const handleClicked = ()=>{
    alert('Button Clicked!')
  }
  const Listitems = ['list1', 'list2', 'list3', 'list4'];
  return (
    <>
      <Header title="Welcome to React" />
      <Person name="Hemant Konda" age={23} />
      <Person name="Hemant Naresh Konda" age={23} />
      <Button text="Click me!" onClick={handleClicked} />
      <br/>
      <List items={Listitems}/>
    </>
  );
}

export default App;
