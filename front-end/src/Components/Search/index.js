import React from 'react';
import './Style.css'

function Index() {
  return (
    <div>
      <form className='flex-form'>
        <div className='box-search'>
          <input className='search' type='text' placeholder='Pesquisar Laboratório' />
          <select>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div>
        <div className='box-title'><h2>Laboratórios</h2></div>
      </form>
    </div>
  );
}

export default Index;