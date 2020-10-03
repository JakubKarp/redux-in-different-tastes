import React from 'react';
import '../App.css';

function Description() {
  return (
    <div className="description">
      Redux Middleware czyli funkcja wywoływana między dispatchem akcji a storem.<br />
      W przykładzie: prosty logger przedstawiający w konsoli:<br />
      typ wywołanej akcji, samą akcję (jej obiekt), oraz stan stora po zakończeniu akcji.<br />
      Middleware skłąda się z trzech zagnieżdżonych funkcji. Kluczowa funkcja next.<br />
      W middlewera można ubrać cokolwiek. <br />
      Drugi przykład - apiMiddleware - trzy akcje (start, sukces, fail i zapytania do api w middlewarze.<br />
      W actions_creators tylko jedna funkcja.<br />
      Słowem obsługa całego zapytania do api w middlewarze (plik: /middleware/api).<br />
      Ważna kolejność middlewarów - logger za api - dzięki temu loguje zdarzenia.<br />
    </div>
  );
}

export default Description;
