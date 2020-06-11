import { getOptions } from 'loader-utils'
import Processor from '@asciidoctor/core'
const asciidoctor = Processor()

export default function loader (source) {
  if (this.cacheable) this.cacheable()
  const options = getOptions(this) || {}
  options.base_dir = this.context + '/'

  const ret = {}
  ret.html = asciidoctor.convert(source, options)
  const json = JSON.stringify(ret)
  const esModule =
    typeof options.esModule !== 'undefined' ? options.esModule : true

  return `${esModule ? 'export default' : 'module.exports ='} ${json};`
}
