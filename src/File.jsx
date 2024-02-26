import React from 'react';


function File() {
    function tsira(text){
        window.alert(text)
      }
  return (
    <React.Fragment>
        {
            <button type='button' onClick={() => tsira('hello world')}> დააკლიკეთ!</button>
        }
       </React.Fragment>
  )
}

export default File