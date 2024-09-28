import { Modal, SimpleInput } from '../../components'
import { DollarIcon } from '../../icons'
import { PaymentModalProps } from '../types'

const PaymentModal: React.FC<PaymentModalProps> = ({ visible, title, onClose, setPaymentAmount, onPayment }) => {
  return (
    <Modal visible={visible} title={title} description="A continuación, ingrese el monto a pagar" onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-4 flex-1">
        <SimpleInput
          type="number"
          placeholder="0.00"
          leftAddon={<DollarIcon width="20" height="20" fill="#b8bbbe" />}
          onChange={ev => setPaymentAmount(Number(ev.target.value))}
        />
        <button className="btn btn-primary" onClick={() => onPayment()}>
          Pagar
        </button>
      </div>
    </Modal>
  )
}

export default PaymentModal
