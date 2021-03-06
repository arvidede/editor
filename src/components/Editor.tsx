import React, { useState, FC, useRef, useEffect } from 'react'
import { correspondingBrackets } from '../utils/constants'
import { parseCSS } from '../utils/helpers'
import { LineNumbers } from './LineNumbers'
import '../styles/Editor.css'

interface Props {
    className?: string
}

export const Editor: FC<Props> = ({ className }) => {
    const [input, setInput] = useState('')
    const [caretPosition, setCaretPosition] = useState<number | null>(null)
    const [focusedLine, setFocusedLine] = useState<number | null>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const handleInputChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setInput(event.target.value)
        handleSetFocusedLine(event)
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
            case '"':
            case "'":
                event.preventDefault()
                const bracketPair = event.key + correspondingBrackets[event.key]
                insertAtIndex(bracketPair, event.currentTarget.selectionEnd, 1)
                break
            case 'Tab':
                event.preventDefault()
                insertAtIndex('    ', event.currentTarget.selectionEnd, 4)
                break
            case 'ArrowUp':
                handleSetFocusedLine(event, -1)
                break
            case 'ArrowDown':
                handleSetFocusedLine(event, 1)
                break
            default:
                break
        }
    }

    useEffect(() => {
        if (caretPosition && textAreaRef.current) {
            textAreaRef.current.setSelectionRange(caretPosition, caretPosition)
            setCaretPosition(null)
        }
    }, [caretPosition])

    const handleSetFocusedLine = (
        event:
            | React.KeyboardEvent<HTMLTextAreaElement>
            | React.MouseEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
        offset = 0
    ) => {
        const lineNumber =
            event.currentTarget.value
                .substr(0, event.currentTarget.selectionStart)
                .split('\n').length -
            1 +
            offset

        if (lineNumber >= 0 && lineNumber <= input.split('\n').length)
            setFocusedLine(lineNumber)
    }

    const handleResetFocusedLine = () => {
        setFocusedLine(null)
    }

    const numRows = (input.match(/\n|\r/g) || []).length + 1

    return (
        <>
            <div className='editor'>
                <textarea
                    onKeyDown={handleKeyDown}
                    onChange={handleInputChange}
                    className='editor-input'
                    value={input}
                    ref={textAreaRef}
                    onBlur={handleResetFocusedLine}
                    onClick={handleSetFocusedLine}
                ></textarea>
                <div className='editor-output'>{parseCSS(input)}</div>
                <LineNumbers numRows={numRows} current={focusedLine} />
            </div>
        </>
    )
}
