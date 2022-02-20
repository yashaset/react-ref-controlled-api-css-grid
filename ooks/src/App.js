import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import { useState } from 'react';
import Route from './Route';
import Header from './Header';
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
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          options={options}
          label='Please select a Color'
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
}

export default App;
