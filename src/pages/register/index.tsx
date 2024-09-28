import { useForm } from 'react-hook-form'
import { ControlledInput } from '../../components'
import { api } from '../../api'
import { Client, RegisterClientPayload } from '../../api/types'
import { useNavigate } from 'react-router-dom'
import { useActiveClient } from '../../contexts/activeClient'
import toast from 'react-hot-toast'

function RegisterPage() {
  const navigate = useNavigate()
  const { setActiveClient } = useActiveClient()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

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
      toast.success('El registro ha sido exitoso')
      setActiveClient(response.data)
      navigate('/')
    } else {
      toast.error('Ha ocurrido un error! Intente de nuevo')
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
              error={errors?.documento}
              msgError="Campo requerido"
              required
            />
            <ControlledInput
              control={control}
              name="nombres"
              type="text"
              label="Nombre y Apellido"
              placeholder="Ingrese su numbre y apellido"
              error={errors?.nombres}
              msgError="Campo requerido"
              required
            />
            <ControlledInput
              control={control}
              name="email"
              type="text"
              label="Email"
              placeholder="Ingrese su correo electrónico"
              error={errors?.email}
              msgError="Campo requerido"
              required
            />
            <ControlledInput
              control={control}
              name="celular"
              type="text"
              label="N˚ teléfono"
              placeholder="Ingrese su número de telefono"
              error={errors?.celular}
              msgError="Campo requerido"
              required
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
