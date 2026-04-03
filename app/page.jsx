export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-12 md:grid md:grid-cols-2 md:gap-12">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
              alt="Camiseta"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-center md:mt-0">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Edición limitada
          </p>

          <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl">
            Camiseta Essential
          </h1>

          <p className="mb-6 max-w-lg text-lg leading-relaxed text-neutral-600">
            Una sola camiseta. Sin menús, sin distracciones. Diseño limpio,
            directo y pensado únicamente para vender este producto.
          </p>

          <div className="mb-8 text-3xl font-semibold">29,95 €</div>

          <div className="mb-6">
            <p className="mb-3 text-sm font-medium">Talla</p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-2xl border border-black bg-black px-5 py-3 text-sm font-medium text-white">
                S
              </button>
              <button className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium transition hover:border-black">
                M
              </button>
              <button className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium transition hover:border-black">
                L
              </button>
              <button className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium transition hover:border-black">
                XL
              </button>
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="cantidad" className="mb-3 block text-sm font-medium">
              Cantidad
            </label>
            <input
              id="cantidad"
              type="number"
              min="1"
              defaultValue="1"
              className="w-24 rounded-2xl border border-neutral-300 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <button className="w-full rounded-2xl bg-black px-8 py-4 text-base font-medium text-white transition hover:opacity-90 md:w-fit">
            Comprar ahora
          </button>

          <p className="mt-6 text-sm text-neutral-500">
            Portal simple de un solo producto.
          </p>
        </div>
      </section>
    </main>
  );
}
