import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["New York", "Kansas", "San Francisco", "Texas", "Denver"];

  const handleSelectItem = (item: string) => {
    return console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
