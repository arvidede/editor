import React, { useState, FC, useRef } from 'react'
import { validCSSProperties } from './constants'
import './Editor.css'

interface Props {
    className?: string
}

const clsx = (classConditions: Record<string, boolean>) => {
    return Object.keys(classConditions)
        .map((key) => classConditions[key] && key)
        .filter(Boolean)
        .join(' ')
}

const parseWord = (word: string) => {
    const trimmed = word.trim().replace(/:|;/g, '')
    const className = clsx({
        class: trimmed.startsWith('.'),
        id: trimmed.startsWith('#'),
        'left-attribute': validCSSProperties.includes(trimmed),
        'right-attribute': false,
    })

    return <code className={className}>{word}</code>
}

const parseRow = (row: string) => {
    if (!row) return <p>&nbsp;</p>
    const words = row.match(/[.]?\w+|\s|\:|\;|./g)!
    return <p>{words.map(parseWord)}</p>
}

const parseCSS = (text: string) => {
    return text.split('\n').map(parseRow)
}

export const Editor: FC<Props> = ({ className }) => {
    const [input, setInput] = useState('')
    const [caretPosition, setCaretPosition] = useState<number | null>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const handleInputChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        let next = event.target.value
        setInput(next)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        switch (event.key) {
            case '[':
            case '{':
                event.preventDefault()
                const closingBracket = event.key == '[' ? ']' : '}'
                let next = input
                const caretIndex = event.currentTarget.selectionEnd
                next =
                    next.slice(0, caretIndex) +
                    event.key +
                    closingBracket +
                    next.slice(caretIndex, next.length)
                setInput(next)
                setCaretPosition(caretIndex)
                break
            case 'Tab':
                event.preventDefault()
                break
            default:
                break
        }
    }

    console.log(JSON.stringify(input), input.split('\n'))

    if (caretPosition && textAreaRef.current) {
        console.log('Setting caret at', caretPosition)
        textAreaRef.current.setSelectionRange(caretPosition, caretPosition)
        setCaretPosition(null)
    }
    return (
        <div className='editor'>
            <textarea
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
                className='editor-input'
                value={input}
                ref={textAreaRef}
            ></textarea>
            <div className='editor-output'>
                {parseCSS(input)}
                <code>spaces{'    '}spaces</code>
            </div>
        </div>
    )
}
