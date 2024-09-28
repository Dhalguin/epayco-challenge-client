type SimpleInputProps = {
  type: 'text' | 'number'
  placeholder: string
  leftAddon: JSX.Element
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

const SimpleInput: React.FC<SimpleInputProps> = ({ type, placeholder, leftAddon, onChange }) => {
  return (
    <div className="flex items-center relative w-full">
      <i className="absolute ml-1.5">{leftAddon} </i>
      <input
        type={type}
        className="border-2 border-solid w-full pr-2 pl-6 py-2 rounded-md"
        placeholder={placeholder}
        onChange={ev => onChange(ev)}
      />
    </div>
  )
}

export default SimpleInput
