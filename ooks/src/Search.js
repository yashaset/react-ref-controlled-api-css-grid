import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);

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
      //   console.log(data);
      setResult(data.query.search);
    };
    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);
  const renderedResults = result.map((res) => {
    return (
      <div className='item' key={res.pageid}>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
          <div className='content'>
            <div className='header'>{res.title}</div>
            <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
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
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;
