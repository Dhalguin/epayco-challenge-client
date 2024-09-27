type ModalComponentProps = {
  visible: boolean
  title: string
  onClose: () => void
  children: JSX.Element | JSX.Element[]
}

const Modal: React.FC<ModalComponentProps> = ({ visible, title, onClose, children }) => {
  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div
        className="flex flex-col bg-white rounded-md p-3"
        style={{ minHeight: '500px', minWidth: '500px', maxHeight: '90vh' }}>
        <div className="flex mb-2 justify-between">
          <p className="text-semi-heading font-bold">{title}</p>
          <span className="text-primary-normal font-bold text-heading cursor-pointer" onClick={onClose}>
            X
          </span>
        </div>
        <div className="px-4 pb-8 flex-1 justify-between" style={{ maxHeight: '85vh' }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
