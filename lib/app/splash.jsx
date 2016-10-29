import React from 'react';
import { PageHeader, Button } from 'react-bootstrap';
import { hashHistory } from 'react-router';

class Splash extends React.Component{
    constructor(props){
      super(props);
      this.handleButton = this.handleButton.bind(this);
    }


    handleButton(e){
      e.preventDefault();
      hashHistory.push('/login');
    }

    render(){
      return(
        <div className='splash-container'>
          <PageHeader>BlueFletch Feed</PageHeader>
          <Button bsStyle="primary" bsSize="large" onClick={this.handleButton}>Login</Button>
        </div>
      );
    }
}

export default Splash;
