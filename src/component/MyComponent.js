import React from 'react';
import ME from '../assets/me.png'
import './MyComponent.css'; 

class MyComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="text">
          <p>{this.props.text}</p>
        </div>

        <div className='me'>
        <img src={ME} alt="me" />
      </div>

        <a href={'https://send.monobank.ua/jar/4BFPHW1yXn?fbclid=PAAabPDcyncQTJRWVmJa613Clx_h0d8oI74-ygehV4I0sbQwkdIJ35FVygRHw_aem_AaxlYzGmnMp7r2huKGqg2kUgI1x1SEC7eyAxakrt-koegAnIjw79Xll-ZDfN3Zc_ejA.'} className="link">
          БАНКА
        </a>
      </div>
    );
  }
}

export default MyComponent;
