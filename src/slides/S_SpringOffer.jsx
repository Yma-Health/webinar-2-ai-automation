import A from '../components/A'

export default function SSpringOffer() {
  return (
    <section className="slide slide-bg-image" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-warm-gradient.png)` }}>
      <div className="slide-inner">
        <A><p className="tag">Spring special</p></A>
        <A d={1}>
          <h1 style={{ fontSize: 72 }}><span style={{ textDecoration: 'line-through', opacity: 0.4 }}>3500</span> 1290 AED / month</h1>
        </A>
        <A d={2}>
          <ul style={{ marginTop: 24, fontSize: 22, color: '#1A1A1A', listStyle: 'disc', paddingLeft: 24, lineHeight: 1.8 }}>
            <li>Locked in till the end of year</li>
            <li>Valid for the first 20 clinics signing before May-end</li>
          </ul>
        </A>
      </div>
    </section>
  )
}
