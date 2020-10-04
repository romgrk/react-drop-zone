/*
 * StyledDropZone.js
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DropZone from './DropZone';

export default function StyledDropZone({
  children,
  className,
  accept,
  multiple,
  handleClick,
  dontRead,
  onDrop,
  ...rest
}) {
  return (
    <DropZone {...{ handleClick, dontRead, accept, multiple, onDrop }}>
      {
        ({ over, overDocument }) => {

          let elementClassName = 'DropZone'
          if (over) elementClassName += ' DropZone--over'
          if (overDocument) elementClassName += ' DropZone--over-document'
          if (className) elementClassName += ' ' + className

          return (
            <div className={elementClassName} role='button' tabIndex='0' {...rest}>
              { children || 'Click or drop your file here' }
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
  className: PropTypes.string,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
}
