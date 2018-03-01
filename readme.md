# DropZone

This is a simple but customizeable component. You can choose between a
pre-styled version, or a bare component that allows you to specify a render
function.

Both versions will trigger an `.onDrop(file: HTML5 File, text: String)`, so you
get both the file handle and its text content in a single event (file reading
can be disabled).

#### Install

`npm i -S react-drop-zone`


## Pre-Styled version

### [StyledDropZone Demo](https://stackblitz.com/edit/react-styled-drop-zone-demo)

![StyledDropZone](https://raw.github.com/romgrk/react-drop-zone/master/static/styled-drop-zone.png)

```jsx
import { StyledDropZone } from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'

<StyledDropZone onDrop={(file, text) => console.log(file, text)} />
```


## Bare version

### [DropZone Demo](https://stackblitz.com/edit/react-drop-zone-demo)

```jsx
import DropZone from 'react-drop-zone'

<DropZone onDrop={(file, text) => console.log(file)}>
{
  ({ over, overDocument }) =>
    <div>
      {
        over ?
          'file is over element' :
        overDocument ?
          'file is over document' :
          'no file'
      }
    </div>
}
</DropZone>
```


## Props

| Name | Description | Default |
| --- | --- | --- |
| `onDrop` (required) | called when a file is dropped or selected. Signature: `(file: HTML5File, text: String)` | |
| `handleClick` | Handle click events on the rendered component | `true` |
| `dontRead` | Prevent reading the file content, if it's causing problems | `false` |
| `label` | [StyledDropZone only] Label on the component | `Select or Drop your file here` |
| `children` | [DropZone only] Render function that receives `({ over: Boolean, overDocument: Boolean})` | `false` |


### Details

The component overwrites the `onDrag/DragEnter/.../Drop` props of the render
function child.
