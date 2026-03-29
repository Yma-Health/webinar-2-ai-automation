import A, { scaleIn } from '../components/A'

export default function S29PartnerProgram() {
  return (
    <section className="slide slide-divider">
      <div className="slide-inner text-center">
        <A>
          <h1>Know a clinic?<br />Let's talk.</h1>
        </A>
        <A d={1}>
          <p className="subtitle" style={{ margin: '16px auto 0', color: 'var(--white)' }}>
            We're running a successful partner program.<br />You refer us to a clinic we might help — we pay the referral fee.
          </p>
        </A>
        <A v={scaleIn} d={2}>
          <img
            src={`${import.meta.env.BASE_URL}qr-code.png`}
            alt="QR code"
            style={{ width: 180, height: 180, borderRadius: 24, marginTop: 48 }}
          />
        </A>
      </div>
    </section>
  )
}
