import { useState } from 'react'
import RechargeWalletModal from '../../modals/rechargeModal'
import PaymentModal from '../../modals/paymentModal'
import ConfirmPaymentModal from '../../modals/confirmPaymentModal'

function HomePage() {
  const [visibleModal, setVisibleModal] = useState({ recharge: false, payment: false, confirm: false })
  const [rechargeWalletAmount, setRechargeWalletAmount] = useState<number>(0)
  const [paymentAmount, setPaymentAmount] = useState<number>(0)
  const [token, setToken] = useState<number>(0)

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

  const rechargeWallet = () => {
    const payload = {
      documento: '',
      celular: '',
      valor: rechargeWalletAmount,
    }

    // Call API
    console.log({ payload })
    closeModal()
  }

  const payment = () => {
    const payload = {
      documento: '',
      celular: '',
    }

    // Call API
    console.log({ payload })
    openModal('confirm')
  }

  const confirmPayment = () => {
    const payload = {
      clientId: '',
      token: token,
      sessionId: '',
      monto: paymentAmount,
    }

    // Call API
    console.log({ payload })
    closeModal()
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="h-[378px]">
            <h2 className="text-sm">
              Hi, <span className="text-lg font-semibold">Dhalgüin Hernandez</span>
            </h2>
            <div className="mt-2">
              <div className="bg-blue-900 text-white rounded-xl p-3 min-h-[125px]">
                <span className="text-gray-200">Saldo disponible</span>
                <h2 className="text-3xl font-semibold mt-2">$ 500.00</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <button className="btn bg-yellow-600 w-full" onClick={() => openModal('payment')}>
              Pagar
            </button>
            <button className="btn bg-blue-900 w-full" onClick={() => openModal('recharge')}>
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
