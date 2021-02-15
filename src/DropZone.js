import React, { Component } from 'react';
import PropTypes from 'prop-types';

import openFile from './open-file'
import readFileAsText from './read-file-as-text'

const dropZones = []
const events = {
  drag:      'onDrag',
  dragstart: 'onDragStart',
  dragend:   'onDragEnd',
  dragover:  'onDragOver',
  dragenter: 'onDragEnter',
  dragleave: 'onDragLeave',
  drop:      'onDrop',
}
Object.keys(events).forEach(event => {
  document.addEventListener(event, (ev) => {
    dropZones.forEach(zone => zone[events[event]](ev, true))
  })
})


class DropZone extends Component {
  constructor(props) {
    super(props)
    this.onClick     = this.onClick.bind(this)
    this.onDrag      = this.onDrag.bind(this)
    this.onDragStart = this.onDragStart.bind(this)
    this.onDragEnd   = this.onDragEnd.bind(this)
    this.onDragOver  = this.onDragOver.bind(this)
    this.onDragEnter = this.onDragEnter.bind(this)
    this.onDragLeave = this.onDragLeave.bind(this)
    this.onDrop      = this.onDrop.bind(this)

    this.state = {
      overDocument: false,
      over: false
    }
  }

  setDragOver(value, document) {
    if (value === false && document) {
      this.timeout = setTimeout(() => this.setState({ overDocument: false }), 75)
    } else if (value === true && document) {
      this.timeout = clearTimeout(this.timeout)
      this.setState({ overDocument: true })
    } else {
      this.setState({ over: value })
    }
  }

  triggerOnDrop(file) {
    if (this.props.dontRead || this.props.multiple) {
      this.props.onDrop(file, undefined)
      return
    }

    readFileAsText(file)
    .catch(err => Promise.resolve(undefined))
    .then(text => this.props.onDrop(file, text))
  }

  componentDidMount() {
    dropZones.push(this)
  }

  componentWillUnmount() {
    dropZones.push(this)
  }

  onClick(event) {
    event.stopPropagation()
    openFile(this.props).then(file => this.triggerOnDrop(file))
  }
  onDrag(event, document) {
    if (document)
      return
    event.preventDefault()
  }
  onDragStart(event, document) {
    if (document)
      return
    event.preventDefault()
  }
  onDragOver(event, document) {
    event.preventDefault()
    this.setDragOver(true, document)
  }
  onDragEnter(event, document) {
    event.preventDefault()
    this.setDragOver(true, document)
  }
  onDragEnd(event, document) {
    event.preventDefault()
    this.setDragOver(false, document)
  }
  onDragLeave(event, document) {
    event.preventDefault()
    this.setDragOver(false, document)
  }
  onDrop(event, document) {
    event.preventDefault()
    this.setDragOver(false, document)
    if (document)
      return

    const file =
      event.dataTransfer.items ?
        event.dataTransfer.items[0].getAsFile() :
        event.dataTransfer.files ?
          event.dataTransfer.files[0] : undefined

    if (file)
      this.triggerOnDrop(file)
  }

  render() {
    const handleClick = this.props.handleClick === true
    const render = this.props.children

    const children = render({ over: this.state.over, overDocument: this.state.overDocument })
    const props = {
      onDrag: this.onDrag,
      onDragStart: this.onDragStart,
      onDragEnd: this.onDragEnd,
      onDragOver: this.onDragOver,
      onDragEnter: this.onDragEnter,
      onDragLeave: this.onDragLeave,
      onDrop: this.onDrop,
    }
    if (handleClick)
      props.onClick = this.onClick

    return React.cloneElement(children, props)
  }
}

DropZone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  handleClick: PropTypes.bool,
  dontRead: PropTypes.bool,
}

DropZone.defaultProps = {
  handleClick: true,
  dontRead: false,
  onDrop: (file, text) => {},
}


export default DropZone;
