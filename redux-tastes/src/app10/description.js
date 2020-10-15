import React from 'react';
import '../App.css';

function Description() {
  return (
    <div className="description">
      useReducer czyli funkcja wbudowana w Reacta z wykorzystaniem useContext.<br />
      Tworzymy tradycyjny reducer oraz definiujemy akcje (typy akcji). Pozbywamy się stora oraz kreatora akcji (przynamniej w najprostszej wersji<br />
      W głównym App przy użyciou useReducer inicjujemy stan początkowy i wyciągamy state oraz dispatch.<br />
      Definiujemy wrównież w App createContext (ze stanem początkowym) i cały App opakowujemy w context.Providera, a jako wartośc przekazujemy state i dispatch z useReducer.<br />
      Pozostaje tylko w komponentach korzystać z useContext i dostępnych wartości state oraz rozsyłać akcje przy użyciu dispatch.<br />

    </div>
  );
}

export default Description;
