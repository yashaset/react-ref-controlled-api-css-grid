import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import { useState } from 'react';
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

const options = [
  {
    label: 'The color red',
    value: 'red',
  },
  {
    label: 'The color green',
    value: 'green',
  },
  {
    label: 'The color blue',
    value: 'blue',
  },
];
function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className='App'>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
}

export default App;
