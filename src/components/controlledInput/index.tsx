import { Control, Controller } from 'react-hook-form'

type ControlledInputProps = {
  control: Control
  name: string
  label: string
  type: 'text' | 'number'
  placeholder: string
}

const ControlledInput: React.FC<ControlledInputProps> = ({ control, name, label, type, placeholder }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <div className="flex flex-col gap-1 mb-2">
          {label && <p className="font-semibold">{label}</p>}
          <div className="flex items-center relative">
            <input
              className="border-2 border-solid w-full px-2 py-2"
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              style={{ borderRadius: '6px' }}
            />
          </div>
        </div>
      )}
    />
  )
}

export default ControlledInput
