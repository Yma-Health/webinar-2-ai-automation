import A from '../components/A'

export default function SReactivationDemo() {
  return (
    <section className="slide slide-bg-image" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-warm-gradient.png)` }}>
      <div className="slide-inner text-center">
        <A>
          <h1 style={{ fontSize: 72 }}>Reactivation Demo</h1>
        </A>
      </div>
    </section>
  )
}
