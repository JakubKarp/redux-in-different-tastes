import React from 'react';
import '../App.css';

function Description() {
  return (
    <div className="description">
      Redux Thunk czyli asynchroniczny kreator akcji. Dzięki paczce THUNK zamiast "dispaczować" obiekty można "dispaczować" funkcje.<br />
      Akcja to obiekt (z typem i paylodem).<br />
      Kreator akcji to funkcja zwracająca akcję.<br />
      Synchroniczne kreatory akcji zwracają obiekty.<br />
      Asynchroniczne kreatory akcji zwracają synchroniczne kreatory akcji.<br />

    </div>
  );
}

export default Description;
