import React from 'react';
import '../App.css';

function Description() {
  return (
    <div className="description">
      Pełna implementacja Reduxa. W App5.js aplikację opakowujemy providerem z pakietu react-redux.
      Do niego jako propsa przekazujemy store. Store utwożony jest w odzielnym pliku - z pakietu redux wyciągamy funkcję createStore i jako argument podajemy reducer. 
      Reducer w osobnym pliku. Tu jest zdefiniowany początkowy stan aplikacji. Reducer przyjmuje akcje. W zależności od typu akcji, aktualizuje stan korzystając z przychoidzącego z akcją paylodu.
      Akcje w osobnym pliku - zdefiniowane jako stringi. (Akcje to obiekty opisujące zdarzenia/eventy - payload)
      Kreatory akcji - w osobnym pliku - to funkcje, zwracające akcje.
      Do komponentu stan jest przekazywany dzięki funkcjo connect z pakietu react-redux. Możemy przekazać wybrane elementy stanu dzięki state.element. Zwyczajowo poprzez mapStatetoProps.
      Po podłączeniu componentu przez connect są w nim dostępne jako propsy - state oraz funkcja dispatch. Która przekazuje ("dispaczuje") creatory akcji do reducera.
    </div>
  );
}

export default Description;
