import React from 'react';
import {ScrollView } from '../dist/index';

const buttonStyles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

const containerSizeStyles = {
  width: '300px',
  height: '200px'
}

const ScrollView1 = ({ children, onClick }) => (
  <div style={containerSizeStyles}>
    <ScrollView>
      {[0,1,2,3,4,5,6,7,8,9,10].map(() => {
        return (<button
          style={buttonStyles}
          onClick={onClick}
        >
          {children}
        </button>);
      })
      }
      </ScrollView>
    </div>
);

// Button.propTypes = {
//   children: React.PropTypes.string.isRequired,
//   onClick: React.PropTypes.func,
// };

export default ScrollView1;
