import React from 'react';
import '../App.css';

function Description() {
  return (
    <div className="description">
      Redux Selector czyli w reducerze definiujemy funkcję, którą potem wykorzystujemy w mapStateToProps.<br />
      Taka funkcja wykonuje określone działania, na danych przychodzących ze stora.<br />
      W tym przypadku sprawdza, czy numer jest parzysty czy nie.<br />
      Często do tego jest wykorzystywana paczka Reselect, która zapewnia m.in. memoizację.<br />
      Reszta jak w redux-saga<br />

    </div>
  );
}

export default Description;
