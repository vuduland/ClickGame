import React from 'react';
import Images from '../../img/rsa_0.png';

class Material extends React.Component {
  render() {
    return (
      <div class='jumbotron'>
        <h1>Hello</h1>
        <ul class='mdc-image-list my-image-list'>
          <li class='mdc-image-list__item'>
            <div class='mdc-image-list__image-aspect-container'>
              <img
                class='mdc-image-list__image'
                src={Images}
                alt='meaningful text'
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Material;
