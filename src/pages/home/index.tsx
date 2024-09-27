function HomePage() {
  return (
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
          <button className="btn bg-yellow-600 w-full">Pagar</button>
          <button className="btn bg-blue-900 w-full">Recargar billetera</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
