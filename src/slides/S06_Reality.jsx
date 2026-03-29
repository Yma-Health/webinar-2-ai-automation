import A, { scaleIn } from '../components/A'

export default function S06Reality() {
  const challenges = [
    {
      title: 'When your team is overloaded',
      text: 'Patients write from morning to midnight, and it\'s extremely important to turn every possible request into a patient since the new leads are coming at much slower pace.',
    },
    {
      title: 'Lost revenue inside your existing patient base',
      text: 'You have a contact list. People who visited once, inquired and never booked, went quiet after a procedure. That base isn\'t working for you. The resource is there — it\'s just sitting idle.',
    },
    {
      title: 'What\'s actually happening in your clinic',
      text: 'How do you measure your own performance right now? Which leads converted, which ones dropped off, and why? Most teams don\'t have a clear answer. And what you can\'t see, you can\'t fix.',
    },
  ]

  return (
    <section className="slide">
      <div className="slide-inner">
        <A><p className="tag">The reality</p></A>
        <A d={1}><h2>3 key challenges<br />the clinics face nowadays</h2></A>

        <div className="card-grid card-grid-3">
          {challenges.map((c, i) => (
            <A v={scaleIn} d={i + 2} key={i}>
              <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 220, paddingBottom: 38 }}>
                <div className="card-icon" style={{ background: 'linear-gradient(135deg, #FFF8FB, #F8E7F0)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F2688B" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </A>
          ))}
        </div>
      </div>
    </section>
  )
}
