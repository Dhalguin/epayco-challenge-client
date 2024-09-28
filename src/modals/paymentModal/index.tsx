import { Modal } from '../../components'
import { PaymentModalProps } from '../types'

const PaymentModal: React.FC<PaymentModalProps> = ({ visible, title, onClose, setPaymentAmount, onPayment }) => {
  return (
    <Modal visible={visible} title={title} description="A continuación, ingrese el monto a pagar" onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-4 flex-1">
        <input
          type="number"
          className="border-2 border-solid w-full px-2 py-2 rounded-md"
          placeholder="0.00"
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
