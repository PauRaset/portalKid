import React from 'react'

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
          maxWidth: '1150px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '60px',
        }}
      >
        <div
          style={{
            flex: '1 1 420px',
            maxWidth: '500px',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
            alt="Camiseta"
            style={{
              width: '100%',
              borderRadius: '28px',
              display: 'block',
              objectFit: 'cover',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
            }}
          />
        </div>

        <div
          style={{
            flex: '1 1 420px',
            maxWidth: '520px',
          }}
        >
          <p
            style={{
              fontSize: '12px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#777',
              marginBottom: '14px',
            }}
          >
            Edición limitada
          </p>

          <h1
            style={{
              fontSize: '56px',
              lineHeight: '1',
              margin: '0 0 18px 0',
              fontWeight: '700',
            }}
          >
            Camiseta Essential
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#555',
              marginBottom: '26px',
            }}
          >
            Una sola camiseta. Sin menús, sin distracciones. Un portal directo,
            limpio y enfocado únicamente en vender este producto.
          </p>

          <div
            style={{
              fontSize: '34px',
              fontWeight: '700',
              marginBottom: '30px',
            }}
          >
            29,95 €
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                marginBottom: '12px',
                fontWeight: '600',
                fontSize: '15px',
              }}
            >
              Talla
            </div>

            <div
              style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              <button style={selectedSize}>S</button>
              <button style={sizeButton}>M</button>
              <button style={sizeButton}>L</button>
              <button style={sizeButton}>XL</button>
            </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <div
              style={{
                marginBottom: '12px',
                fontWeight: '600',
                fontSize: '15px',
              }}
            >
              Cantidad
            </div>

            <input
              type="number"
              min="1"
              defaultValue="1"
              style={{
                width: '90px',
                padding: '14px',
                borderRadius: '16px',
                border: '1px solid #d6d6d6',
                fontSize: '16px',
                outline: 'none',
              }}
            />
          </div>

          <button
            style={{
              padding: '17px 34px',
              borderRadius: '18px',
              border: 'none',
              backgroundColor: '#111111',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
            }}
          >
            Comprar ahora
          </button>

          <p
            style={{
              marginTop: '22px',
              fontSize: '14px',
              color: '#888',
              lineHeight: '1.6',
            }}
          >
            Portal simple de un solo producto.
          </p>
        </div>
      </div>
    </div>
  )
}

const sizeButton = {
  padding: '13px 20px',
  borderRadius: '16px',
  border: '1px solid #d6d6d6',
  backgroundColor: '#ffffff',
  color: '#111111',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '600',
}

const selectedSize = {
  padding: '13px 20px',
  borderRadius: '16px',
  border: '1px solid #111111',
  backgroundColor: '#111111',
  color: '#ffffff',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '600',
}
