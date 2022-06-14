import React from 'react';
import './Style.css';
import Search from '../../Components/Search';
import Calendar from '../../Components/Calendar';
import 'react-calendar/dist/Calendar.css';
import Card from '../../Components/Card'
import Header from '../../Components/Header'

function Index(props) {
  return (
    <div className='container'>
      <Header page='Laboratórios' />
      <Search />
      <article className='article-lab'>
        <Calendar />
        <Card />
      </article>
    </div>
  );
}

export default Index;