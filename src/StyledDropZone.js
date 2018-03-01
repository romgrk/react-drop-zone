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
        ({ dragOver, dragOverDocument }) => {

          let className = 'DropZone'
          if (dragOver) className += ' DropZone--over'
          if (dragOverDocument) className += ' DropZone--over-document'

          return (
            <div className={className}>
              { label || 'Select or Drop your file here' }
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
