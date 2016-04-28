import test from 'ava'

import server from './server'

test('a test', t => {
  return server.inject({
    url: '/blah'
  }).then(reply => {
    t.is(reply.statusCode, 201)
  })
})
