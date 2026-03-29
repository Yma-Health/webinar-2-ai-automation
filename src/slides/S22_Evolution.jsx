import A, { scaleIn } from '../components/A'

export default function S22Evolution() {
  return (
    <section className="slide" style={{ background: 'var(--white)' }}>
      <div className="slide-inner">
        <A><p className="tag">Platform</p></A>
        <A d={1}><h2>The journey</h2></A>
        <A d={2}><p className="section-subtitle">From Google Sheets to a platform</p></A>

        <div className="evo-grid evo-grid-clean">
          <A v={scaleIn} d={3}>
            <div className="evo-card-clean" style={{ background: 'linear-gradient(160deg, #EBEBEB, #FCFCFC)', paddingBottom: 48 }}>
              <p className="speaker-name">Then</p>
              <ul className="evo-list-clean">
                <li>700 services in a spreadsheet</li>
                <li>Bot was confused</li>
                <li>No control</li>
              </ul>
            </div>
          </A>
          <A v={scaleIn} d={4}>
            <div className="evo-card-clean" style={{ background: 'linear-gradient(160deg, #E8F4FF, #F9FCFF)', paddingBottom: 48 }}>
              <p className="speaker-name">Now</p>
              <ul className="evo-list-clean">
                <li>We built our own CMS</li>
                <li>Structured data — doctors, services, settings</li>
                <li>Internal tool for our team</li>
              </ul>
            </div>
          </A>
          <A v={scaleIn} d={5}>
            <div className="evo-card-clean" style={{ background: 'linear-gradient(160deg, #FFEFE4, #FDFDFD)', paddingBottom: 48 }}>
              <p className="speaker-name">Future</p>
              <ul className="evo-list-clean">
                <li>Clinics manage it themselves</li>
                <li>Update services, add doctors, change tone</li>
                <li>Self-serve platform</li>
              </ul>
            </div>
          </A>
        </div>
      </div>
    </section>
  )
}
