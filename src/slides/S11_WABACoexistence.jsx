import A, { slideRight } from '../components/A'

export default function S11WABACoexistence() {
  return (
    <section className="slide" style={{ background: 'var(--white)' }}>
      <div className="slide-inner">
        <A><p className="tag">Solution</p></A>
        <A d={1}><h2>WABA Coexistence Mode</h2></A>
        <A d={2}>
          <p className="section-subtitle">
            Clinics don't want to give up their existing WhatsApp setup to get AI features.
          </p>
        </A>

        <div className="split-layout" style={{ marginTop: 80, alignItems: 'flex-start' }}>
          <A v={slideRight} d={3}>
            <div style={{ maxWidth: 380 }}>
              <p className="speaker-name">How it works</p>
              <p className="feature-text" style={{ marginTop: 12 }}>Clinics stay on their familiar WhatsApp Business interface — nothing changes for the team. In parallel, they get full AI integration: broadcasts, reactivations, automated replies, analytics.</p>
              <p className="feature-text" style={{ marginTop: 16 }}>Same WhatsApp they know. All the AI on top.</p>
            </div>
          </A>
          <A d={4}>
            <img src={`${import.meta.env.BASE_URL}waba-phone.png`} alt="WABA Coexistence" style={{ width: '100%' }} />
          </A>
        </div>
      </div>
    </section>
  )
}
