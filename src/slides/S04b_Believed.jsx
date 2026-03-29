import A from '../components/A'

export default function S04bBelieved() {
  return (
    <section className="slide slide-bg-image" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-warm-gradient.png)` }}>
      <div className="slide-inner text-center">
        <A>
          <h1 style={{ fontSize: 72 }}>We believed conversational AI would be the breakthrough</h1>
        </A>
        <A d={1}>
          <p className="subtitle" style={{ margin: '48px auto 0', fontSize: 28 }}>Working with real clinics quickly proved otherwise</p>
        </A>
      </div>
    </section>
  )
}
