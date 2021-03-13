import { validCSSProperties, units, tags, misc, selectors } from './constants'

const clsx = (classConditions: Record<string, boolean>) => {
    return Object.keys(classConditions)
        .map((key) => classConditions[key] && key)
        .filter(Boolean)
        .join(' ')
}

const parseWord = (word: string) => {
    const trimmed = word.trim()
    const className = clsx({
        class: trimmed.startsWith('.'),
        id: trimmed.startsWith('#'),
        media: trimmed.startsWith('@'),
        string:
            (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
            (trimmed.startsWith("'") && trimmed.endsWith("'")),
        tag: trimmed in tags,
        entity: trimmed in validCSSProperties,
        unit: trimmed in units,
        number: !isNaN(Number(trimmed)),
        var: trimmed.startsWith('--'),
        selector: trimmed in selectors,
        misc: trimmed in misc,
        comment: trimmed.startsWith('/*'),
        markup: true,
    })
    return <code className={className}>{word}</code>
}

const parseBlock = (block: string) => {
    if (!block) return <div>&nbsp;</div>
    const words =
        block.match(
            /\/\*[\s\S]*?(\*\/)|\/\*[\s\S]*|\d+|[.#@]?\w+([-_]\w+)?|\s+|:\w+|:|;|['"].*['"]|--\w+(-\w+)?|./g
        ) || []
    return <div className='block'>{words.map(parseWord)}</div>
}

export const parseCSS = (text: string) => {
    const blocks =
        text.match(
            /\/\*[\s\S]*?(\*\/)|\/\*[\s\S]*|((?!\/\*)[\s\S])*((\n|\r)*)?|\r?\n/g
        ) || []
    return blocks.map(parseBlock)
}
