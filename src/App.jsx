export default function App() {
    return (
      <main style={{
        minHeight: '100vh',
        background: '#fff',
        color: '#111',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px'
      }}>
        <section style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80"
              alt="Camiseta"
              style={{
                width: '100%',
                maxWidth: '460px',
                borderRadius: '24px',
                objectFit: 'cover'
              }}
            />
          </div>
  
          <div>
            <p style={{
              fontSize: '12px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#666',
              marginBottom: '12px'
            }}>
              Edición limitada
            </p>
  
            <h1 style={{
              fontSize: '52px',
              lineHeight: 1.05,
              margin: '0 0 18px 0'
            }}>
              Camiseta Essential
            </h1>
  
            <p style={{
              fontSize: '18px',
              color: '#555',
              lineHeight: 1.6,
              marginBottom: '24px'
            }}>
              Una sola camiseta. Sin menús, sin distracciones. Solo producto y compra.
            </p>
  
            <div style={{
              fontSize: '32px',
              fontWeight: 'bold',
              marginBottom: '28px'
            }}>
              29,95 €
            </div>
  
            <div style={{ marginBottom: '22px' }}>
              <p style={{ marginBottom: '10px', fontWeight: 600 }}>Talla</p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {['S', 'M', 'L', 'XL'].map((talla) => (
                  <button
                    key={talla}
                    style={{
                      padding: '12px 18px',
                      borderRadius: '16px',
                      border: '1px solid #ccc',
                      background: talla === 'M' ? '#111' : '#fff',
                      color: talla === 'M' ? '#fff' : '#111',
                      cursor: 'pointer'
                    }}
                  >
                    {talla}
                  </button>
                ))}
              </div>
            </div>
  
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>
                Cantidad
              </label>
              <input
                type="number"
                min="1"
                defaultValue="1"
                style={{
                  width: '80px',
                  padding: '12px',
                  borderRadius: '14px',
                  border: '1px solid #ccc'
                }}
              />
            </div>
  
            <button style={{
              padding: '16px 28px',
              borderRadius: '18px',
              border: 'none',
              background: '#111',
              color: '#fff',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
              Comprar ahora
            </button>
          </div>
        </section>
      </main>
    )
  }