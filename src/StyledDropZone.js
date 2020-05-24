/*
 * StyledDropZone.js
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DropZone from './DropZone';

export default function StyledDropZone({ label, ...props }) {
  return (
    <DropZone {...props}>
      {
        ({ over, overDocument }) => {

          let className = 'DropZone'
          if (over) className += ' DropZone--over'
          if (overDocument) className += ' DropZone--over-document'

          return (
            <div className={className} role='button'>
              { label || 'Click or drop your file here' }
            </div>
          )
        }
      }
    </DropZone>
  )
}

StyledDropZone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  handleClick: PropTypes.bool,
  dontRead: PropTypes.bool,
  label: PropTypes.string,
}
