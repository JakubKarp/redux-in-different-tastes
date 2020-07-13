import React from 'react';
import '../App.css';

function Description() {
  return (
    <div className="description">
      Prosta implementacja Reduxa. Korzystamy wyłącznie z wbudowanych w Reduxa funcji (bez react-redux) i odwołujemy się do store za każdym razem. Z reduxa wyciągamy jedynie createStore. Następnie do tej funkcji przekazujemy reducer z opisanymi akcjami/casemi. Wywołanie akcji odbywa się przez store.dispatch. Aktualizacja danych - poprzez store.getState() oraz store.subscribe() (store.subscribe wywoływana jest po każdym wywołaniu jakiejkolwiek akcji - aktualizacja stanu w komponencie w tym przypadku dokonywana jest poprzez setState i wywołanie store.getState() ) 
    </div>
  );
}

export default Description;
