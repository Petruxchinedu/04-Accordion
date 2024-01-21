import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [text, setText] =useState(data)
  return  <main>
  <section className='container'>
    <div>
      <h3>Questions and Answer about Login</h3>
    </div>
    <div>
    <SingleQuestion text={text}/>
    </div>
  </section>
</main>
}

export default App;
