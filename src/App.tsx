
import './App.css';
import ListGroup from './components/ListGroup';

function App() {
    //here we use the Message React component that we created

    let items = [
        'New York',
        'Tokyo',
        'Seoul',
        'Paris'
    ];

    const handleSelectItem = (item: string) =>
    {
        console.log(item);
    }

    return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
   
}

export default App;
