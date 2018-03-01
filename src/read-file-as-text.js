/*
 * read-file-as-text.js
 */


const INPUT_ENCODING = 'ISO-8859-1'

/**
 * Reads a HTML5 file as text
 * @param {File} file
 */
export default function readFileAsText(file, encoding = INPUT_ENCODING) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload  = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsText(file, encoding)
  })
}
