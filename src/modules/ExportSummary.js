const _formatParagraphs = (paragraphs) => {
  let output = ''
  paragraphs.forEach((paragraph) => {
    const cleanDescription = paragraph.description.replace(/<\/?[^>]+(>|$)/g, "").trim()
    output += `${cleanDescription}\n\n`
  })
  return output
}

const _formatDoc = (item) => {
  let output = ''

  let keys = ['name', 'alternative_title', 'entry_into_force', 'date_promulgated', 'organization', 'rights_holder', 'rights_holder_website']

  keys.forEach((key) => {
    if(item.doc.metadata[key]) {
      output += `${item.doc.metadata[key].label}: ${item.doc.metadata[key].values[0].value}\n`
    }
  })
  output += `Full Document URL: https://convocate.nd.edu/document/${item.doc.id}\n`
  output += '\n'
  output += _formatParagraphs(item.paragraphs)
  output += '\n'
  return output
}

const _download = (output) => {
  let element = document.createElement('a')
  let file = new Blob([output], { type: 'text/plain' })
  element.href = URL.createObjectURL(file)
  element.download = `Convocate Export.txt`
  element.click()
}

const ExportSummary = (vaticanDocs, humanrightsDocs) => {
  let output = ''

  output += `Retrieved from https://convocate.nd.edu on ${new Date()}\n\n`

  if(vaticanDocs && vaticanDocs.length > 0) {
    output += `Catholic Social Teachings:\n\n`
    vaticanDocs.forEach((item) => {
      output += _formatDoc(item)
    })
  }
  if(humanrightsDocs && humanrightsDocs.length > 0) {
    output += `International Human Rights:\n\n`
    humanrightsDocs.forEach((item) => {
      output += _formatDoc(item)
    })
  }
  _download(output)
  return
}
export default ExportSummary
