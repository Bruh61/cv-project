import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Krefeld", "Düsseldorf", "Köln", "Hamburg", "Dortmund"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  /*return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );*/
  return (
    <div>
      <Alert color="primary" onClick={() => console.log("Clicked")}>
        My Alert
      </Alert>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  );
}
export default App;
