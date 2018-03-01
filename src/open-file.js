/*
 * open-file.js
 */


export default function openFile(options = {}) {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input')

    if (options.multiple)
      input.setAttribute('multiple', '')

    if (options.accept)
      input.setAttribute('accept', options.accept)

    input.setAttribute('type', 'file')
    input.style.display = 'none'

    input.addEventListener('change', ev => {
      if (input.files.length) {
        if (options.multiple)
          resolve(input.files)
        else
          resolve(input.files[0])
      } else {
        reject(ev)
      }
      input.remove()
    })

    document.body.appendChild(input)

    const event = document.createEvent('MouseEvent')
    event.initMouseEvent('click', false, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    input.dispatchEvent(event)
  })
}
