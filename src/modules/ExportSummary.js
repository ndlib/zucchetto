// Format all the paragraphs in an array from a single doc
const _formatParagraphs = (paragraphs) => {
  let output = ''
  paragraphs.forEach((paragraph) => {
    const cleanDescription = paragraph.description.replace(/<\/?[^>]+(>|$)/g, "").trim()
    output += `${cleanDescription}\r\n\r\n`
  })
  return output
}

// Format individual doc with basic metadata and paragraph content
const _formatDoc = (item) => {
  let output = ''

  let keys = [
    'name',
    'alternative_title',
    'entry_into_force',
    'date_promulgated',
    'organization',
    'rights_holder',
    'rights_holder_website'
  ]

  keys.forEach((key) => {
    if(item.doc.metadata[key]) {
      output += `${item.doc.metadata[key].label}: ${item.doc.metadata[key].values[0].value}\r\n`
    }
  })
  output += `Full Document URL: https://convocate.nd.edu/document/${item.doc.id}\r\n`
  output += '\r\n'
  output += _formatParagraphs(item.paragraphs)
  output += '\r\n'
  return output
}

// Create blob file using formatted content and trigger download
const _download = (output) => {
  let element = document.createElement('a')
  let file = new Blob([output], { type: 'text/plain' })
  element.href = URL.createObjectURL(file)
  element.download = `Convocate Export.txt`
  element.click()
}

// Put it all together and make a downloadable file based on the arrays of docs
// Takes an array of vatican documents and a second array of human rights docs
const ExportSummary = (vaticanDocs, humanrightsDocs) => {
  let output = ''

  output += `Retrieved from https://convocate.nd.edu on ${new Date()}\r\n\r\n`

  if(vaticanDocs && vaticanDocs.length > 0) {
    output += `Catholic Social Teachings:\r\n\r\n`
    vaticanDocs.forEach((item) => {
      output += _formatDoc(item)
    })
  }
  if(humanrightsDocs && humanrightsDocs.length > 0) {
    output += `International Human Rights:\r\n\r\n`
    humanrightsDocs.forEach((item) => {
      output += _formatDoc(item)
    })
  }
  _download(output)
  return
}
export default ExportSummary
