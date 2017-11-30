# DropZone

Simplest dropzone component.

```jsx

import DropZone from 'react-drop-zone'

<DropZone onDrop={(file /*: HTML5 File */) => console.log(file)}>
{
  ({ dragOver, dragOverDocument }) =>
    <div>
      {
        dragOver ?
          'file is over element' :
        dragOverDocument ?
          'file is over document' :
          'no file'
      }
    </div>
}
</DropZone>
```

[Demo](https://stackblitz.com/edit/react-drop-zone-demo)

### Install

`npm i -S react-drop-zone`

### Details

The component overwrites the `onDrag/DragEnter/.../Drop` props of the render
function child.
