import { FC } from 'react'

interface LineNumbersProps {
    numRows: number
}

export const LineNumbers: FC<LineNumbersProps> = ({ numRows }) => {
    // const numbers = Array.from({length: numRows}, (_, i) => i + 1).keys()
    const numbers = Array(numRows).fill(null)
    return (
        <ol className='line-numbers'>
            {numbers.map((_, idx) => (
                <li key={idx}>{idx + 1}</li>
            ))}
        </ol>
    )
}
