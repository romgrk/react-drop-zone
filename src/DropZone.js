import React, { Component } from 'react';

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

  componentDidMount() {
    dropZones.push(this)
  }

  componentWillUnmount() {
    dropZones.push(this)
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

    if (file && this.props.onDrop)
      this.props.onDrop(file)
  }

  render() {
    const render = this.props.children

    const children = render({ dragOver: this.state.over, dragOverDocument: this.state.overDocument })

    return React.cloneElement(children, {
      onDrag: this.onDrag,
      onDragStart: this.onDragStart,
      onDragEnd: this.onDragEnd,
      onDragOver: this.onDragOver,
      onDragEnter: this.onDragEnter,
      onDragLeave: this.onDragLeave,
      onDrop: this.onDrop,
    })
  }
}

export default DropZone;
