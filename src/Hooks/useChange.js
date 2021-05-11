import { useState } from 'react';

export const useChange = initialValues => {
    const [vals, setVals] = useState(initialValues);
    return [
      vals,
      e => {
        setVals({
          // ...Object.keys(vals).map((key)=> vals[key] = false),
          ...Object.fromEntries(Object.entries(vals).map(([k, v]) => [k, false])),
          [e.target.id]: true
        })
      }
    ]
  };