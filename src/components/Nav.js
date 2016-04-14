import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
export default class Nav extends Component {
  render(){
    return (
      <div className='component-nav'>
        <div className='left'>
          <Link activeClassName='active' to='/book'>借书</Link>
        </div>
        <div className='middle'>
          <Link activeClassName='active' to='/add_book'>捐书</Link>
        </div>
        <div className='right'>
          <Link activeClassName='active' to='/center'>我的</Link>
        </div>
      </div>
    )
  }
}