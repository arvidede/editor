import React, { useState, FC } from 'react'
import './Editor.css'

interface Props {
    className?: string
}

const parseWord = (word: string) => {
    const className = word.startsWith('.')
        ? 'class'
        : word.startsWith('#')
        ? 'id'
        : word.endsWith(':')
        ? 'left-attribute'
        : 'right-attribute'
    return <code className={className}>{word}</code>
}

const parseRow = (row: string) => {
    if (!row) return <p>&nbsp;</p>
    const words = row.split(' ')
    return <p>{words.map(parseWord)}</p>
}

const parseCSS = (text: string) => {
    return text.split('\n').map(parseRow)
}

export const Editor: FC<Props> = ({ className }) => {
    const [input, setInput] = useState('')

    const handleInputChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        let next = event.target.value
        const caretIndex = event.target.selectionStart
        console.log(next, caretIndex)
        if (
            caretIndex > 0 &&
            next[caretIndex - 1] === '{' &&
            next.length > input.length
        ) {
            next =
                next.slice(0, caretIndex) +
                ' }' +
                next.slice(caretIndex, next.length)
        }
        setInput(next)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        switch (event.key) {
            case '{':
                break
            default:
                break
        }
    }

    console.log(JSON.stringify(input), input.split('\n'))

    return (
        <div className='editor'>
            <textarea
                onChange={handleInputChange}
                className='editor-input'
                value={input}
            ></textarea>
            <div className='editor-output'>{parseCSS(input)}</div>
        </div>
    )
}
