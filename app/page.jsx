export default function SingleProductPortal() {
    return (
      <div className="min-h-screen bg-white text-neutral-900 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-3xl border border-neutral-200 shadow-sm p-6 bg-neutral-50">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
                alt="Camiseta principal"
                className="w-full h-[480px] object-cover rounded-2xl"
              />
            </div>
          </div>
  
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-3">
              Edición limitada
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
              Camiseta Essential
            </h1>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Una sola prenda. Un solo objetivo. Diseño limpio, premium y directo a compra,
              sin menús ni distracciones.
            </p>
  
            <div className="text-3xl font-semibold mb-6">29,95 €</div>
  
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3">Talla</label>
              <div className="flex flex-wrap gap-3">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className="px-5 py-3 rounded-2xl border border-neutral-300 hover:border-neutral-900 transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
  
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">Cantidad</label>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-24 px-4 py-3 rounded-2xl border border-neutral-300 outline-none"
              />
            </div>
  
            <button className="w-full md:w-auto px-8 py-4 rounded-2xl bg-neutral-900 text-white text-base font-medium shadow-sm hover:opacity-90 transition">
              Comprar ahora
            </button>
  
            <p className="text-sm text-neutral-500 mt-6">
              En este portal solo aparece esta camiseta y la compra. Nada más.
            </p>
          </div>
        </div>
      </div>
    );
  }
  