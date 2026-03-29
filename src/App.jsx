import Progress from './components/Progress'
import S01Title from './slides/S01_Title'
import S02Mentimeter1 from './slides/S02_Mentimeter1'
import S03Speakers from './slides/S03_Speakers'
import S06Reality from './slides/S06_Reality'
import S07IntegrationsPain from './slides/S07_IntegrationsPain'
import S04Headlines from './slides/S04_Headlines'
import S04bBelieved from './slides/S04b_Believed'
import S15NotAIProblem from './slides/S15_NotAIProblem'
import S16SmartPrioritization from './slides/S16_SmartPrioritization'
import S20HelpfulTooFar from './slides/S20_HelpfulTooFar'
import S21SafeMode from './slides/S21_SafeMode'
import S13TwoBots from './slides/S13_TwoBots'
import S14SpamFiltering from './slides/S14_SpamFiltering'
import S11WABACoexistence from './slides/S11_WABACoexistence'
import S08ClinicVsBot from './slides/S08_ClinicVsBot'
import S08bCaseB from './slides/S08b_CaseB'
import S09ServiceCatalog from './slides/S09_ServiceCatalog'
import S22Evolution from './slides/S22_Evolution'
import S19Mentimeter3 from './slides/S19_Mentimeter3'
import SDormantPatients from './slides/S_DormantPatients'
import SMissedReality from './slides/S_MissedReality'
import SAnalytics from './slides/S_Analytics'
import S29PartnerProgram from './slides/S29_PartnerProgram'
import S30Close from './slides/S30_Close'

const SLIDE_COUNT = 24

export default function App() {
  return (
    <>
      <Progress count={SLIDE_COUNT} />

      <S01Title />
      <S02Mentimeter1 />
      <S03Speakers />
      <S06Reality />
      <S07IntegrationsPain />
      <S04Headlines />
      <S04bBelieved />
      <S15NotAIProblem />
      <S16SmartPrioritization />
      <S20HelpfulTooFar />
      <S21SafeMode />
      <S13TwoBots />
      <S14SpamFiltering />
      <S11WABACoexistence />
      <S08ClinicVsBot />
      <S08bCaseB />
      <S09ServiceCatalog />
      <S22Evolution />
      <S19Mentimeter3 />
      <SDormantPatients />
      <SMissedReality />
      <SAnalytics />
      <S29PartnerProgram />
      <S30Close />
    </>
  )
}
