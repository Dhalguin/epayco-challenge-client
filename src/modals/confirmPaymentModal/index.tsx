import { Modal, SimpleInput } from '../../components'
import { DollarIcon } from '../../icons'
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
        <SimpleInput
          type="number"
          placeholder="XXXXXX"
          leftAddon={<DollarIcon width="20" height="20" fill="#b8bbbe" />}
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
