import React from 'react';
import '../App.css';

function Description() {
  return (
    <div className="description">
      Redux Saga czyli potężne narzędzie do obsługi złożonych asynchronicznych akcji i kompleksowych side efektów.<br />
      Dzięki sagom (a dokładniej generatorom, których używają sagi) można m.in. zapauzować wywoływanie akcji, skasować, albo obsłużyć zdarzenia długo trwające.<br />
      W przykładzie cała obsługa api została przeniesiona do sagi.<br />
      Dzięki funkcji getLatest można zablokować wielokrtone zapytania do api (wielokrotne kliknięcia w button).<br />
      Również można obsłużyć długotrwałe zdarzenia - tu licznik sekund.<br />
    </div>
  );
}

export default Description;
