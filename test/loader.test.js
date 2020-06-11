import compiler from './compiler'
import nodeEval from 'node-eval'

test('Load simple document', async () => {
  const stats = await compiler('example.adoc')
  const output = stats.toJson().modules[0].source
  const module = nodeEval(output, './index.js')

  expect(module.html).toContain('Section 1')
  expect(module.html).toContain('<h2>Section 2</h2>')
  expect(module.html).toContain('<h3>Section 2</h3>')
})
