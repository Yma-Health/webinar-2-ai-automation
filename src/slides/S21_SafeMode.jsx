import A, { slideRight } from '../components/A'

export default function S21SafeMode() {
  return (
    <section className="slide" style={{ background: 'var(--white)' }}>
      <div className="slide-inner">
        <A><p className="tag">Solution</p></A>
        <A d={1}><h2>Safe Mode</h2></A>
        <A d={2}>
          <p className="section-subtitle">
            Operators spend time thinking about what to reply, especially when handling a high volume of chats, which slows down response time and reduces efficiency. But at the same time your replies are too complicated for AI and you don't<br />want AI to lead the chat instead of you.
          </p>
        </A>

        <div className="split-layout" style={{ marginTop: 80, alignItems: 'flex-start' }}>
          <A v={slideRight} d={3}>
            <div style={{ maxWidth: 380 }}>
              <p className="speaker-name">How it works</p>
              <p className="feature-text" style={{ marginTop: 12 }}>AI generates ready-to-send replies for each conversation. The operator simply reviews the suggestion, optionally edits it, and sends it in one click.</p>
              <p className="feature-text" style={{ marginTop: 16 }}>When handling 100+ conversations per day, even saving a few minutes per reply adds up significantly — freeing up your team's time to focus on cases that truly require human attention. And you still can review and check AI replies instead of letting AI to work blindly.</p>
            </div>
          </A>
          <A d={4}>
            <img src={`${import.meta.env.BASE_URL}safe-mode.png`} alt="Safe Mode" style={{ width: '100%' }} />
          </A>
        </div>
      </div>
    </section>
  )
}
