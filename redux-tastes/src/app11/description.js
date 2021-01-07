import React from 'react';
import '../App.css';

function Description() {
  return (
    <div className="description">
      Pełna implementacja Reduxa. Tak jak w "Redux with react-redux and actions creators". Tu jednak korzystamy z hooków, któe są dodane do wersji 7 react-redux. Pozwala to wyeliminować dispatch i connect z komponentów i zastąpić je hookami.
    </div>
  );
}

export default Description;
