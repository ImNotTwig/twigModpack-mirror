// priority: 0

console.info('Starting KubeJS')

ServerEvents.tags('block', event => {
  event.add('create:tree_attachments', 'netherexp:shroomnight')
})
