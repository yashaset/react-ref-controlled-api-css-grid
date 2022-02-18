import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);
  console.log(result);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResult(data);
    };
    if (term) {
      search();
    }
  }, [term]);

  return (
    <div className='ui form'>
      <div className='field'>
        <label>Enter Search Term</label>
        <input
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className='input'
        />
      </div>
    </div>
  );
};

export default Search;
