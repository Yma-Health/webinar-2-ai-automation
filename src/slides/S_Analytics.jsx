import A, { slideRight } from '../components/A'

export default function SAnalytics() {
  return (
    <section className="slide" style={{ background: 'var(--white)' }}>
      <div className="slide-inner">
        <A><p className="tag">Solution</p></A>
        <A d={1}><h2>Analytics</h2></A>
        <A d={2}>
          <p className="section-subtitle">
            Clinics often lack clear visibility into why leads do or do not convert, which channels bring valuable patients,<br />and where opportunities are lost. This makes it difficult to optimize marketing and improve booking performance.
          </p>
        </A>

        <div className="split-layout" style={{ marginTop: 80, alignItems: 'flex-start' }}>
          <A v={slideRight} d={3}>
            <div style={{ maxWidth: 380 }}>
              <p className="speaker-name">How it works</p>
              <p className="feature-text" style={{ marginTop: 12 }}>The analytics dashboard processes all conversations into funnel statuses and provides a clear breakdown of performance.</p>
              <p className="feature-text" style={{ marginTop: 16 }}>Shows how different channels contribute to bookings, helping identify the most effective sources.</p>
              <p className="feature-text" style={{ marginTop: 16 }}>Explains why qualified leads did not convert and categorizes irrelevant traffic.</p>
            </div>
          </A>
          <A d={4}>
            <img src={`${import.meta.env.BASE_URL}analytics-dashboard-v2.png`} alt="Analytics Dashboard" style={{ width: '100%' }} />
          </A>
        </div>
      </div>
    </section>
  )
}
