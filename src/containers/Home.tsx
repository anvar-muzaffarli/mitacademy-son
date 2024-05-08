import AboutSection from '../components/AboutSection'
import AcademicPartners from '../components/AcademicPartners'
import EducationFields from '../components/EducationFields'
import HeroLayout from '../components/HeroLayout'
import Instructor from '../components/Instructor'
import StudentFeedback from '../components/StudentFeedback'
import WhyMITAcademy from '../components/WhyMITAcademy'


const Home = () => {
  return (
    <div>
        <HeroLayout />
        <AboutSection />
        <EducationFields />
        <Instructor />
        <AcademicPartners />
        <StudentFeedback />
        <WhyMITAcademy />
       
    </div>
  )
}

export default Home