import Accordion from './Accordion';
import Search from './Search';
const items = [
  {
    title: 'What is React?',
    content: 'React is front end JavaScript Framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS Library among engineers',
  },
  {
    title: 'How to you use React?',
    content: 'You use react by creating components',
  },
];
function App() {
  return (
    <div className='App'>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
}

export default App;
