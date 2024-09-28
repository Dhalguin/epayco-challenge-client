import { Control, Controller, ErrorOption } from 'react-hook-form'

type ControlledInputProps = {
  control: Control
  name: string
  label: string
  type: 'text' | 'number'
  placeholder: string
  error?: ErrorOption
  msgError?: string
  required?: boolean
}

const ControlledInput: React.FC<ControlledInputProps> = ({
  control,
  name,
  label,
  type,
  placeholder,
  error,
  msgError = '',
  required = false,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: { value: required, message: msgError },
      }}
      render={({ field: { value, onChange } }) => (
        <div className="flex flex-col gap-1 mb-2">
          {label && <p className="font-semibold">{label}</p>}
          <div className="flex items-center relative">
            <input
              className="border-2 border-solid rounded-md w-full px-2 py-2"
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              style={{ borderColor: error ? '#dc2626' : '#b8bbbe' }}
            />
          </div>
          {error && <span className="text-red-600 text-md">{error.message}</span>}
        </div>
      )}
    />
  )
}

export default ControlledInput
