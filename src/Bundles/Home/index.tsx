import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Head, Global } from '@Components';
import { Container } from './styled';
import { TextQuote, TextAuthor } from './styled';

export const HomeBundle = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  let quotesData;

  var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
  ];

  const sayHello = () => {
    axios
      .get(
        `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
      )
      .then((res) => {
        quotesData = res;
        console.log(quotesData);
        setQuote(getQuote());
        setAuthor(getAuthor());
      });
  };

  useEffect(() => {
    sayHello();
  }, []);

  function getRandomQuote() {
    return quotesData.data.quotes[
      Math.floor(Math.random() * quotesData.data.quotes.length)
    ];
  }

  let currentQuote = '';
  let currentAuthor = '';
  let randomQuote;

  function getQuote() {
    randomQuote = getRandomQuote();

    currentQuote = randomQuote.quote;
    return currentQuote;
  }

  function getAuthor() {
    return (currentAuthor = randomQuote.author);
  }

  return (
    <>
      <Head />
      <body>
        <Global />
        <Container>
          <TextQuote>{quote}</TextQuote>
          <TextAuthor>- {author}</TextAuthor>

          <div>
            <Button onClick={sayHello}>New quote</Button>
          </div>
        </Container>
      </body>
    </>
  );
};
