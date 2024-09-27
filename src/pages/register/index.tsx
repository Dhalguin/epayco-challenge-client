import { useForm } from 'react-hook-form'
import { ControlledInput } from '../../components'
import { api } from '../../api'
import { Client, RegisterClientPayload } from '../../api/types'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
  const navigate = useNavigate()

  const { control, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    const payload: RegisterClientPayload = {
      documento: data.documento,
      nombres: data.nombres,
      email: data.email,
      celular: data.celular,
    }

    registerClient(payload)
  }

  const registerClient = async (payload: RegisterClientPayload) => {
    const response = await api.registerClient<Client>(payload)

    if (response?.status === 201) {
      console.log(response.data)

      navigate('/')
    }
  }

  return (
    <div className="container">
      <div className="card">
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
              <button className="btn btn-primary">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
