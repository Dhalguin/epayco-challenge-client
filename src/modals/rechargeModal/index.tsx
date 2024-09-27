import { Modal } from '../../components'
import { RechargeWalletModalProps } from '../types'

const RechargeWalletModal: React.FC<RechargeWalletModalProps> = ({ visible, title, onChange }) => {
  return (
    <Modal visible={visible} title={title} onClose={onChange}>
      <p>A continuación, ingrese el monto que desea recargar a su billeterera virtual</p>
      <div className="flex flex-col items-center justify-center gap-4 flex-1">
        <input
          type="number"
          className="border-2 border-solid w-full px-2 py-2 rounded-md"
          placeholder="Ingrese el monto"
        />
        <button className="btn btn-primary">Recargar</button>
      </div>
    </Modal>
  )
}

export default RechargeWalletModal
