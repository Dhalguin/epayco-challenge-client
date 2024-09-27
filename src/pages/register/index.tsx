import { useForm } from 'react-hook-form'
import { ControlledInput } from '../../components'

function RegisterPage() {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log({ data })
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="container">
        <h2 className="text-2xl font-bold text-center">Registro de cliente</h2>
        <div className="mt-5 w-full">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
            <ControlledInput
              control={control}
              name="documento"
              type="text"
              label="N˚ documento"
              placeholder="Ingrese su documento"
            />
            <ControlledInput
              control={control}
              name="nombres"
              type="text"
              label="Nombre y Apellido"
              placeholder="Ingrese su numbre y apellido"
            />
            <ControlledInput
              control={control}
              name="email"
              type="text"
              label="Email"
              placeholder="Ingrese su correo electrónico"
            />
            <ControlledInput
              control={control}
              name="celular"
              type="text"
              label="N˚ teléfono"
              placeholder="Ingrese su número de telefono"
            />
            <div className="flex justify-center mt-4">
              <button className="btn-primary">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
