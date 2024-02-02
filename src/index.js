import { createFilter } from '@rollup/pluginutils'

export default function org(options = {}) {
    const filter = createFilter(options.include || ['**/*.org'], options.exclude)

    return {
        name: 'org',
        transform(org, id) {
            if (!filter(id)) return null

            const data = org
            return {
                code: `export default ${JSON.stringify(data)};`,
                map: { mappings: '' }
            }

        }

    }
}
