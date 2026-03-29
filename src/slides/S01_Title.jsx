import A from '../components/A'

export default function S01Title() {
  return (
    <section className="slide slide-bg-image" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-warm-gradient.png)` }}>
      <div className="slide-inner title-inner">
        <A>
          <img src={`${import.meta.env.BASE_URL}yma_logo.svg`} alt="Yma" className="title-logo" />
        </A>

        <A d={1}>
          <h1 className="title-heading">
            AI for Healthcare:<br />navigating uncertainty
          </h1>
          <p className="title-desc">
            Practical clinic solutions
          </p>
        </A>

        <A d={2}>
          <p className="title-webinar-label" style={{ marginBottom: 24 }}>WEBINAR #2 | YMA HEALTH | 1 APRIL 2026</p>
        </A>
      </div>
    </section>
  )
}
