# react-drop-zone

> Simple and easily usable

This package offers a styled version of the component or a render-function
version which allows you to control rendering. Both versions trigger an
`.onDrop(file: HTML5 File, content: String)` (file reading can be disabled).  


### Styled version ([open demo](https://stackblitz.com/edit/react-styled-drop-zone-demo))

![StyledDropZone](https://raw.github.com/romgrk/react-drop-zone/master/static/styled-drop-zone.png)

```jsx
import { StyledDropZone } from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'

<StyledDropZone
  onDrop={(file, text) => console.log(file, text)}
/>
```
  
  

### Bare version ([open demo](https://stackblitz.com/edit/react-drop-zone-demo))

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

| Name                | Component        | Description                                                                             | Default                        |
| ---                 | ---              | ---                                                                                     | ---                            |
| `accept`            | *both*           | Restricts downloads to an extension type.                                               | ---                            |
| `multiple`          | *both*           | Allows multiple files to be selected. (disables file reading!)                          | ---                            |
| `onDrop` (required) | *both*           | called when a file is dropped or selected. Signature: `(file: HTML5File, text: String)` |                                |
| `handleClick`       | *both*           | Handle click events on the rendered component                                           | `true`                         |
| `dontRead`          | *both*           | Prevents reading the file content, if it's causing problems                             | `false`                        |
| `children`          | `DropZone`       | Render function that receives `({ over: Boolean, overDocument: Boolean})`               | `false`                        |
| `children`          | `StyledDropZone` | Label on the component                                                                  | `Click or drop your file here` |


### Additional API

The function `readFileAsText` is exported if you need to read a file's text content:

```jsx
import { StyledDropZone, readFileAsText } from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'

<StyledDropZone
  dontRead
  onDrop={(file) =>
    !file.name.endsWith('.txt') ?
      'Not a text file' :
      readFileAsText(file)
        .then(text => console.log(file, text))
  }
/>
```

### Details

The component overwrites the `onDrag/DragEnter/.../Drop` props of the render
function child.

### The accept attribute

If you need more information, see here: ([open developer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Additional_attributes))

The device allows, for example, accept = ".pdf, image/*"
