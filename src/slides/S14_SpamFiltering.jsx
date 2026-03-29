import A, { slideRight } from '../components/A'

export default function S14SpamFiltering() {
  return (
    <section className="slide" style={{ background: 'var(--white)' }}>
      <div className="slide-inner">
        <A><p className="tag">Solution</p></A>
        <A d={1}><h2>Spam Auto-Filtering</h2></A>
        <A d={2}>
          <p className="section-subtitle">
            Operators are often distracted by spam, irrelevant messages, or inappropriate content,<br />which makes it harder to focus on real patient conversations that require attention.
          </p>
        </A>

        <div className="split-layout" style={{ marginTop: 80, alignItems: 'flex-start' }}>
          <A v={slideRight} d={3}>
            <div style={{ maxWidth: 380 }}>
              <p className="speaker-name">How it works</p>
              <p className="feature-text" style={{ marginTop: 12 }}>Yma automatically detects and filters inappropriate or irrelevant messages. Clearly harmful content is blocked and not shown.</p>
              <p className="feature-text" style={{ marginTop: 16 }}>Less critical noise (such as marketing or resumes) is marked as spam — it remains accessible if needed but does not interfere with active conversations, allowing your team to stay focused on what truly matters.</p>
            </div>
          </A>
          <A d={4}>
            <img src={`${import.meta.env.BASE_URL}spam-filter.png`} alt="Spam Auto-Filtering" style={{ width: '100%' }} />
          </A>
        </div>
      </div>
    </section>
  )
}
