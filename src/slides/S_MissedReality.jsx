import A from '../components/A'

export default function SMissedReality() {
  return (
    <section className="slide slide-bg-image" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-warm-gradient.png)` }}>
      <div className="slide-inner text-center">
        <A><p className="tag">Problem</p></A>
        <A d={1}>
          <h1 style={{ fontSize: 72 }}>Missed reality check</h1>
        </A>
      </div>
    </section>
  )
}
