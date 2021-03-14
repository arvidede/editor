import { FC } from 'react'

interface LineNumbersProps {
    numRows: number
    current: number | null
}

export const LineNumbers: FC<LineNumbersProps> = ({ numRows, current }) => {
    // const numbers = Array.from({length: numRows}, (_, i) => i + 1).keys()
    const numbers = Array(numRows).fill(null)
    return (
        <ol className='line-numbers'>
            {numbers.map((_, idx) => (
                <li key={idx} className={idx === current ? 'active' : ''}>
                    {idx + 1}
                </li>
            ))}
        </ol>
    )
}
