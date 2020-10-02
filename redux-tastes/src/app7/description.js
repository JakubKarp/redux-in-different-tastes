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
      Wszystko opórcz middleware jak powyżej.<br />
    </div>
  );
}

export default Description;
