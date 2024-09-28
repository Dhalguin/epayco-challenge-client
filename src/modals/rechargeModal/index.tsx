import { Modal, SimpleInput } from '../../components'
import { DollarIcon } from '../../icons'
import { RechargeWalletModalProps } from '../types'

const RechargeWalletModal: React.FC<RechargeWalletModalProps> = ({
  visible,
  title,
  onClose,
  setRechargeWalletAmount,
  onRecharge,
}) => {
  return (
    <Modal
      visible={visible}
      title={title}
      description="A continuación, ingrese el monto que desea recargar a su billeterera virtual"
      onClose={onClose}>
      <div className="flex flex-col justify-center items-center h-full gap-4 w-full">
        <SimpleInput
          type="number"
          placeholder="0.00"
          leftAddon={<DollarIcon width="20" height="20" fill="#b8bbbe" />}
          onChange={ev => setRechargeWalletAmount(Number(ev.target.value))}
        />
        <button className="btn btn-primary" onClick={() => onRecharge()}>
          Recargar
        </button>
      </div>
    </Modal>
  )
}

export default RechargeWalletModal
