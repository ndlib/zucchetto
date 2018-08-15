module.exports = function flattenTreeToArray(topics, arr) {
  for(var topic in topics) {
    arr.push(topics[topic])
    if(topics[topic].children) {
      flattenTreeToArray(topics[topic].children, arr)
    }
  }
  return arr
}
