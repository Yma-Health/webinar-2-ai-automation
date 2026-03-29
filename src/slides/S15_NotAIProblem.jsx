import A, { scaleIn } from '../components/A'
import AnimatedNumber from '../components/AnimatedNumber'

export default function S15NotAIProblem() {
  return (
    <section className="slide" style={{ background: 'var(--white)' }}>
      <div className="slide-inner">
        <A><p className="tag">Insight</p></A>
        <A d={1}><h2>It wasn't an AI problem</h2></A>

        <div className="versus-grid versus-grid-equal" style={{ marginTop: 8, gap: 16 }}>
          <A v={scaleIn} d={2}>
            <div className="versus-card" style={{ background: 'linear-gradient(160deg, #FFEFE4, #FDFDFD)' }}>
              <p className="versus-label" style={{ color: '#1A1A1A' }}>What the clinic thought</p>
              <p className="versus-desc" style={{ color: '#1A1A1A' }}>We have an AI problem.<br />The bot's answers aren't good enough.</p>
            </div>
          </A>
          <A v={scaleIn} d={3}>
            <div className="versus-card" style={{ background: 'linear-gradient(160deg, #EBEBEB, #FCFCFC)' }}>
              <p className="versus-label" style={{ color: '#1A1A1A' }}>What the data showed</p>
              <p className="versus-value" style={{ fontSize: 56 }}><AnimatedNumber value={375} /></p>
              <p className="versus-desc" style={{ color: '#1A1A1A' }}>patients stopped answering. Not because of bad AI —<br />because nobody followed up.</p>
            </div>
          </A>
        </div>

        <A d={4}>
          <div className="lesson-card">
            <p className="lesson-label">Lesson learned</p>
            <p className="lesson-text">The clinics have no clear visibility into what's happening with the incoming patients.</p>
          </div>
        </A>
      </div>
    </section>
  )
}
