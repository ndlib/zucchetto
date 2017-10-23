import topics from '../components/Search/topics.js'

function flattenTreeToArray(topics, arr) {
  for(var topic in topics) {
    arr.push(topics[topic])
    if(topics[topic].children) {
      flattenTreeToArray(topics[topic].children, arr)
    }
  }
  return arr
}

module.exports = function(term) {
  if(!window.flattenedTopics) {
    window.flattenedTopics =  []
    window.flattenedTopics = flattenTreeToArray(topics.topics, window.flattenedTopics)
  }
  let topic = window.flattenedTopics.find(
    (t) => {
      return t.value === term
    }
  )
  if(topic) {
    return topic.name
  }
  return null
}
