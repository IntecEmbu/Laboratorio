import React from "react";

function Index(props) {
  return (
    <div>
      <div class="cut"></div>
      <header className='header'>{`${props.page}`}</header>
    </div>
  );
}

export default Index;