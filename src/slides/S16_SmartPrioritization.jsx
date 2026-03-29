import A, { slideRight } from '../components/A'

export default function S16SmartPrioritization() {
  return (
    <section className="slide" style={{ background: 'var(--white)' }}>
      <div className="slide-inner">
        <A><p className="tag">Solution</p></A>
        <A d={1}><h2>Smart Prioritization</h2></A>
        <A d={2}>
          <p className="section-subtitle">
            Important conversations can be missed during the day, especially when there is a high volume of chats.<br />Operators may overlook unanswered questions or urgent cases.
          </p>
        </A>

        <div className="split-layout" style={{ marginTop: 80, alignItems: 'flex-start' }}>
          <A v={slideRight} d={3}>
            <div style={{ maxWidth: 380 }}>
              <p className="speaker-name">How it works</p>
              <p className="feature-text" style={{ marginTop: 12 }}>Smart Sorting runs during non-working hours. It reviews all conversations from the last 24 hours and prioritizes them based on context. It detects chats where something was missed (e.g., unanswered questions) and highlights the most urgent cases.</p>
              <p className="feature-text" style={{ marginTop: 16 }}>In the morning, operators see these prioritized chats at the top, each with an AI-generated summary explaining what happened and what action is needed.</p>
            </div>
          </A>
          <A d={4}>
            <img src={`${import.meta.env.BASE_URL}prioritization-v2.png`} alt="Smart Prioritization" style={{ width: '100%' }} />
          </A>
        </div>
      </div>
    </section>
  )
}
