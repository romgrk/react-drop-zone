# DropZone

This is a simple but customizeable component. You can use the styled version or
the render-function version which allows you to control rendering.  Both
versions trigger an `.onDrop(file: HTML5 File, content: String)` (file reading
can be disabled).

### Styled version ([open demo](https://stackblitz.com/edit/react-styled-drop-zone-demo))

![StyledDropZone](https://raw.github.com/romgrk/react-drop-zone/master/static/styled-drop-zone.png)

```jsx
import { StyledDropZone } from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'

<StyledDropZone onDrop={(file, text) => console.log(file, text)} />
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
| `onDrop` (required) | *both*           | called when a file is dropped or selected. Signature: `(file: HTML5File, text: String)` |                                |
| `handleClick`       | *both*           | Handle click events on the rendered component                                           | `true`                         |
| `dontRead`          | *both*           | Prevents reading the file content, if it's causing problems                             | `false`                        |
| `children`          | `DropZone`       | Render function that receives `({ over: Boolean, overDocument: Boolean})`               | `false`                        |
| `label`             | `StyledDropZone` | Label on the component                                                                  | `Click or drop your file here` |


### Details

The component overwrites the `onDrag/DragEnter/.../Drop` props of the render
function child.
