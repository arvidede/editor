const asMap = (list: string[]) =>
    list.reduce((rest: Record<string, boolean>, it: string) => {
        rest[it] = true
        return rest
    }, {})

export const selectors = asMap([
    '&',
    '*',
    '+',
    '>',
    '||',
    '~',
    ':active',
    '::after',
    ':after',
    ':any-link',
    '::attr',
    ':autofill',
    '::backdrop',
    '::before',
    ':before',
    ':blank',
    ':checked',
    '::content',
    ':current',
    ':current',
    '/deep/',
    ':default',
    ':defined',
    ':dir',
    ':disabled',
    ':empty',
    ':enabled',
    '::file-selector-button',
    ':first',
    ':first-child',
    'first-child',
    '::first-letter',
    ':first-letter',
    '::first-line',
    ':first-line',
    ':first-of-page',
    ':first-of-type',
    ':focus',
    ':focus-visible',
    ':focus-within',
    ':fullscreen',
    ':future',
    '::grammar-error',
    ':has',
    '::highlight',
    ':host',
    ':host',
    ':host-context',
    ':hover',
    ':indeterminate',
    ':in-range',
    ':invalid',
    ':is',
    ':lang',
    ':lang',
    ':last-child',
    ':last-of-page',
    ':last-of-type',
    ':left',
    ':link',
    ':local-link',
    '::marker',
    ':matches',
    ':not',
    ':nth-child',
    ':nth-col',
    '::nth-fragment',
    ':nth-last-child',
    ':nth-last-col',
    ':nth-last-of-type',
    ':nth-of-page(n)',
    ':nth-of-type',
    ':only-child',
    ':only-of-type',
    ':optional',
    ':out-of-range',
    '::part',
    ':past',
    ':paused',
    '::placeholder',
    ':placeholder-shown',
    ':playing',
    ':read-only',
    ':read-write',
    ':required',
    ':right',
    ':root',
    ':scope',
    '::selection',
    '::shadow',
    '::slotted',
    '::spelling-error',
    ':start-of-page',
    ':target',
    '::target-text',
    ':target-within',
    ':user-invalid',
    ':user-valid',
    ':valid',
    ':visited',
    ':-webkit-autofill',
    ':where',
])

export const propertyValues = asMap(['flex', 'transparent', 'none'])

export const correspondingBrackets = {
    '{': '}',
    '[': ']',
    '(': ')',
}

export const misc = asMap([':', ';', '{', '}', '[', ']', ',', '(', ')'])

export const units = asMap([
    'vh',
    'vw',
    'px',
    'rem',
    'em',
    'ex',
    'ch',
    'vmin',
    'vmax',
    '%',
])

export const validCSSProperties = asMap([
    'azimuth',
    'background',
    'background-attachment',
    'background-color',
    'background-image',
    'background-position',
    'background-repeat',
    'border',
    'border-bottom',
    'border-bottom-color',
    'border-bottom-style',
    'border-bottom-width',
    'border-collapse',
    'border-color',
    'border-left',
    'border-left-color',
    'border-left-style',
    'border-left-width',
    'border-right',
    'border-right-color',
    'border-right-style',
    'border-right-width',
    'border-spacing',
    'border-style',
    'border-top',
    'border-top-color',
    'border-top-style',
    'border-top-width',
    'border-width',
    'border-radius',
    'bottom',
    'caption-side',
    'clear',
    'clip',
    'color',
    'content',
    'counter-increment',
    'counter-reset',
    'cue',
    'cue-after',
    'cue-before',
    'cursor',
    'direction',
    'display',
    'elevation',
    'empty-cells',
    'float',
    'font',
    'font-family',
    'font-size',
    'font-style',
    'font-variant',
    'font-weight',
    'height',
    'left',
    'letter-spacing',
    'line-height',
    'list-style',
    'list-style-image',
    'list-style-position',
    'list-style-type',
    'margin',
    'margin-bottom',
    'margin-left',
    'margin-right',
    'margin-top',
    'max-height',
    'max-width',
    'min-height',
    'min-width',
    'orphans',
    'outline',
    'outline-color',
    'outline-style',
    'outline-width',
    'overflow',
    'padding',
    'padding-bottom',
    'padding-left',
    'padding-right',
    'padding-top',
    'page-break-after',
    'page-break-before',
    'page-break-inside',
    'pause',
    'pause-after',
    'pause-before',
    'pitch',
    'pitch-range',
    'play-during',
    'position',
    'quotes',
    'richness',
    'right',
    'speak',
    'speak-header',
    'speak-numeral',
    'speak-punctuation',
    'speech-rate',
    'stress',
    'table-layout',
    'text-align',
    'text-decoration',
    'text-indent',
    'text-transform',
    'top',
    'unicode-bidi',
    'vertical-align',
    'visibility',
    'voice-family',
    'volume',
    'white-space',
    'widows',
    'width',
    'word-spacing',
    'z-index',
    'resize',
    'opacity',
    'caret-color',
])

export const tags = asMap([
    'a',
    'abbr',
    'acronym',
    'address',
    'applet',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'basefont',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'center',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'font',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'meta',
    'meter',
    'nav',
    'noframes',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strike',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'svg',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'tt',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
])
