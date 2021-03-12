import React, { useState, FC, useRef, useEffect } from 'react'
import {
    validCSSProperties,
    units,
    tags,
    misc,
    correspondingBrackets,
} from './constants'
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
    const trimmed = word.trim()
    const className = clsx({
        class: trimmed.startsWith('.'),
        id: trimmed.startsWith('#'),
        media: trimmed.startsWith('@'),
        string:
            (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
            (trimmed.startsWith("'") && trimmed.endsWith("'")),
        tag: tags.includes(trimmed),
        entity: validCSSProperties.includes(trimmed),
        unit: units.includes(trimmed),
        number: !isNaN(Number(trimmed)),
        misc: misc.includes(trimmed),
        markup: true,
    })

    console.log('Word:', word)

    return <code className={className}>{word}</code>
}

const parseRow = (row: string) => {
    if (!row) return <p>&nbsp;</p>
    const words = row.match(/\d+|[.#@]?\w+([-_]\w+)?|\s+|:|;|['"].+['"]|./g)!
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

    const insertAtIndex = (value: string, index: number, offset: number) => {
        let string_ = input
        string_ =
            string_.slice(0, index) +
            value +
            string_.slice(index, string_.length)
        setInput(string_)
        setCaretPosition(index + offset)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        switch (event.key) {
            case '(':
            case '[':
            case '{':
                event.preventDefault()
                const bracketPair = event.key + correspondingBrackets[event.key]
                insertAtIndex(bracketPair, event.currentTarget.selectionEnd, 1)

                break
            case 'Tab':
                event.preventDefault()
                insertAtIndex('    ', event.currentTarget.selectionEnd, 4)
                break
            default:
                break
        }
    }

    console.log(JSON.stringify(input), input.split('\n'))

    useEffect(() => {
        if (caretPosition && textAreaRef.current) {
            textAreaRef.current.setSelectionRange(caretPosition, caretPosition)
            setCaretPosition(null)
        }
    }, [caretPosition])

    return (
        <div className='editor'>
            <textarea
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
                className='editor-input'
                value={input}
                ref={textAreaRef}
            ></textarea>
            <div className='editor-output'>{parseCSS(input)}</div>
        </div>
    )
}
