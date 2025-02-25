import { OptionListProps } from './type'

const OptionList = ({ options, selectedOption, onSelect }: OptionListProps) => {
    return (
        <div className="w-[80%] flex flex-col justify-between">
            {options?.map((item, index) => {
                const [key, value] = Object.entries(item)[0]
                return (
                    <button
                        key={key || index}
                        className={`p-2 my-1 rounded cursor-pointer ${selectedOption === key ? 'bg-gray-600' : ' border-[1px] border-gray-400'}`}
                        onClick={() => onSelect(key)}
                    >
                        <p>
                            {index + 1}. {value}
                        </p>
                    </button>
                )
            })}
        </div>
    )
}
export default OptionList
