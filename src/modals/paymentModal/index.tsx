import { Modal } from '../../components'
import { PaymentModalProps } from '../types'

const PaymentModal: React.FC<PaymentModalProps> = ({ visible, title, onClose, setPaymentAmount, onPayment }) => {
  return (
    <Modal visible={visible} title={title} onClose={onClose}>
      <p>A continuación, ingrese el monto a pagar</p>
      <div className="flex flex-col items-center justify-center gap-4 flex-1">
        <input
          type="number"
          className="border-2 border-solid w-full px-2 py-2 rounded-md"
          placeholder="0.00"
          onChange={ev => setPaymentAmount(Number(ev.target.value))}
        />
        <button className="btn bg-yellow-600" onClick={() => onPayment()}>
          Pagar
        </button>
      </div>
    </Modal>
  )
}

export default PaymentModal
