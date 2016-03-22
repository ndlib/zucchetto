module.exports = {
  type: "Facet Topics",
  topics: [
    {
      name: 'Topic 1',
      value: 'topic1',
      children: [
        {name: 'Topic 1-1', value: 'topic1-1'},
        {name: 'Topic 1-2', value: 'topic1-2'}
      ]
    },
    {
      name: 'Topic 2',
      value: 'topic2',
      children: [
        {name: 'Topic 2-1', value: 'topic2-1'},
        {
          name: 'Topic 2-2',
          value: 'topic2-2',
          children: [
            {name: 'Topic 2-2-1', value: 'topic2-2-1'},
            {name: 'Topic 2-2-2', value: 'topic2-2-2'}
          ]
        },
        {name: 'Topic 2-3', value: 'topic2-3'}
      ]
    },
    {
      name: 'Topic 3',
      value: 'topic3'
    },
    {
      name: 'Topic 4',
      value: 'topic4',
      children: [
        {name: 'Topic 4-1', value: 'topic4-1'},
        {name: 'Topic 4-2', value: 'topic4-2'}
      ]
    }
  ]
}
