export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        color: '#111111',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '50px',
        }}
      >
        <div style={{ flex: '1 1 400px', maxWidth: '460px' }}>
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
            alt="Camiseta"
            style={{
              width: '100%',
              borderRadius: '24px',
              display: 'block',
            }}
          />
        </div>

        <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
          <p
            style={{
              fontSize: '12px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#666',
              marginBottom: '10px',
            }}
          >
            Edición limitada
          </p>

          <h1
            style={{
              fontSize: '48px',
              lineHeight: '1.05',
              margin: '0 0 18px 0',
            }}
          >
            Camiseta Essential
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#555',
              marginBottom: '24px',
            }}
          >
            Una sola camiseta. Sin menús, sin distracciones. Solo producto y compra.
          </p>

          <div
            style={{
              fontSize: '30px',
              fontWeight: '700',
              marginBottom: '26px',
            }}
          >
            29,95 €
          </div>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '10px', fontWeight: '600' }}>Talla</div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button style={btnSelected}>S</button>
              <button style={btn}>M</button>
              <button style={btn}>L</button>
              <button style={btn}>XL</button>
            </div>
          </div>

          <div style={{ marginBottom: '28px' }}>
            <div style={{ marginBottom: '10px', fontWeight: '600' }}>Cantidad</div>
            <input
              type="number"
              min="1"
              defaultValue="1"
              style={{
                width: '80px',
                padding: '12px',
                borderRadius: '14px',
                border: '1px solid #ccc',
                fontSize: '16px',
              }}
            />
          </div>

          <button
            style={{
              padding: '16px 28px',
              borderRadius: '18px',
              border: 'none',
              background: '#111',
              color: '#fff',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  )
}

const btn = {
  padding: '12px 18px',
  borderRadius: '16px',
  border: '1px solid #ccc',
  background: '#fff',
  color: '#111',
  cursor: 'pointer',
}

const btnSelected = {
  padding: '12px 18px',
  borderRadius: '16px',
  border: '1px solid #111',
  background: '#111',
  color: '#fff',
  cursor: 'pointer',
}
