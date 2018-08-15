import topics from '../components/Search/topics.js'
import flattenTreeToArray from './FlattenTreeToArray.js'

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
