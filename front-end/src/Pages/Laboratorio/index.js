import React from 'react';
import './Style.css';
import Search from '../../Components/Search';
import Calendar from '../../Components/Calendar';
import 'react-calendar/dist/Calendar.css';
import Card from '../../Components/Card'
import Header from '../../Components/Header';
import Nav from '../../Components/Nav';

function Index(props) {
  return (
    <div>
    <Nav />
    <div className='container'>
      <span className='little-crack'></span>
      <div className='screen'>
        <Header page='Laboratórios' />
        <Search />
        <article className='article-lab'>
          <Calendar />
          <Card />
        </article>
      </div>
    </div>
    </div>
  );
}

export default Index;