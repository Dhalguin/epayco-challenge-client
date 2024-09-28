import { useEffect, useState } from 'react'
import RechargeWalletModal from '../../modals/rechargeModal'
import PaymentModal from '../../modals/paymentModal'
import ConfirmPaymentModal from '../../modals/confirmPaymentModal'
import { api } from '../../api'
import { Client, ConfirmPaymentPayload, PaymentPayload, RechargeWalletPayload, SessionId } from '../../api/types'
import { useActiveClient } from '../../contexts/activeClient'
import { useNavigate } from 'react-router-dom'
import { UserIcon } from '../../icons'
import toast from 'react-hot-toast'

function HomePage() {
  const [visibleModal, setVisibleModal] = useState({ recharge: false, payment: false, confirm: false })
  const [rechargeWalletAmount, setRechargeWalletAmount] = useState<number>(0)
  const [paymentAmount, setPaymentAmount] = useState<number>(0)
  const [token, setToken] = useState<number>(0)
  const [sessionId, setSessonId] = useState<string>('')
  const [availableBalance, setAvailableBalance] = useState(0)

  const { activeClient, setActiveClient } = useActiveClient()

  const navigate = useNavigate()

  const openModal = (modal: 'recharge' | 'payment' | 'confirm') => {
    switch (modal) {
      case 'recharge':
        setVisibleModal(prevState => ({ ...prevState, recharge: true }))
        break

      case 'payment':
        setVisibleModal(prevState => ({ ...prevState, payment: true }))
        break

      case 'confirm':
        setVisibleModal(prevState => ({ ...prevState, confirm: true }))
        break

      default:
        break
    }
  }

  const closeModal = () => {
    setVisibleModal(prevState => ({ ...prevState, recharge: false, payment: false, confirm: false }))
  }

  const rechargeWallet = async () => {
    const payload: RechargeWalletPayload = {
      documento: activeClient.documento,
      celular: activeClient.celular,
      valor: rechargeWalletAmount,
    }

    const response = await api.rechargeWallet(payload)
    if (response?.status === 200) {
      toast.success('Recargó su billetera correctamente')
      balance()
      closeModal()
    } else {
      toast.error('Ha ocurrido un error! Intenete de nuevo')
      closeModal()
    }
  }

  const payment = async () => {
    const payload: PaymentPayload = {
      documento: activeClient.documento,
      celular: activeClient.celular,
    }

    const response = await api.payment<SessionId>(payload)
    if (response?.status === 200) {
      toast.loading('Código enviado. Revise su correo electrónico')
      setSessonId(response.data.sessionId)
      openModal('confirm')
    } else {
      toast.error('Ha ocurrido un error! Intenete de nuevo')
    }
  }

  const confirmPayment = async () => {
    const payload: ConfirmPaymentPayload = {
      clientId: activeClient._id,
      token,
      sessionId,
      monto: paymentAmount,
    }

    const response = await api.confirmPayment(payload)
    if (response?.status === 200) {
      toast.success('Pago realizado correctamente')
      balance()
      closeModal()
    } else {
      toast.error('Ha ocurrido un error! Intenete de nuevo')
      closeModal()
    }
  }

  const balance = async () => {
    const response = await api.checkBalance<Client>(activeClient.documento, activeClient.celular)
    if (response?.status === 200) {
      setAvailableBalance(response.data.valor)
      setActiveClient(response.data)
    }
  }

  useEffect(() => {
    if (!activeClient?._id) navigate('/register')
    else balance()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="h-[378px]">
            <div className="flex items-center gap-3 mb-5">
              <i className="bg-blue-500 p-3 rounded-full">
                <UserIcon width="20" height="20" fill="#ffffff" />
              </i>
              <h2 className="text-base">
                Bienvenido <span className="text-lg font-semibold">{activeClient.nombres}</span>
              </h2>
            </div>
            <div className="mt-2">
              <div className="bg-blue-900 text-white rounded-xl p-3 min-h-[125px]">
                <span className="text-gray-200">Saldo disponible</span>
                <h2 className="text-3xl font-semibold mt-2">$ {availableBalance.toFixed(2)}</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1 items-center">
            <button className="btn btn-primary w-2/3" onClick={() => openModal('payment')}>
              Pagar
            </button>
            <button className="btn btn-secondary w-2/3" onClick={() => openModal('recharge')}>
              Recargar billetera
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {/* Recharge Wallet Modal */}
      <RechargeWalletModal
        visible={visibleModal.recharge}
        title="Recargar billetera"
        onClose={() => closeModal()}
        setRechargeWalletAmount={setRechargeWalletAmount}
        onRecharge={rechargeWallet}
      />

      {/* Payment Modal */}
      <PaymentModal
        visible={visibleModal.payment}
        title="Pagar"
        onClose={() => closeModal()}
        setPaymentAmount={setPaymentAmount}
        onPayment={payment}
      />

      {/* Confirm Payment Modal */}
      <ConfirmPaymentModal
        visible={visibleModal.confirm}
        title="Confirmar"
        onClose={() => closeModal()}
        setToken={setToken}
        onConfirmPayment={confirmPayment}
      />
    </>
  )
}

export default HomePage
