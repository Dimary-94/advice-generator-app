import React from 'react';
import axios from 'axios';
import { Button } from '@Components';

export const HomeBundle = () => {
  const sayHello = () => {
    axios
      .get(
        `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <div>This is HomePage layout</div>
      <div>
        <Button onClick={sayHello}>test</Button>
      </div>
    </div>
  );
};