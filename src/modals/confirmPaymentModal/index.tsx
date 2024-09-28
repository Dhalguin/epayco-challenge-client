import { Modal } from '../../components'
import { ConfirmPaymentModalProps } from '../types'

const ConfirmPaymentModal: React.FC<ConfirmPaymentModalProps> = ({
  visible,
  title,
  onClose,
  setToken,
  onConfirmPayment,
}) => {
  return (
    <Modal
      visible={visible}
      title={title}
      description="Le hemos enviado un código de confirmación a su correo, por favor revise e ingréselo a continuación."
      onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-4 flex-1">
        <input
          type="number"
          className="border-2 border-solid w-full px-2 py-2 rounded-md"
          placeholder="XXXXXX"
          onChange={ev => setToken(Number(ev.target.value))}
        />
        <button className="btn btn-primary" onClick={() => onConfirmPayment()}>
          Confirmar
        </button>
      </div>
    </Modal>
  )
}

export default ConfirmPaymentModal
