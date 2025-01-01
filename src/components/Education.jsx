import SectionWrapper from "../hoc/SectionWrapper"
import {fst,esprit, lemans} from '../assets'

const Education = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg space-y-4">
    <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">Education</h2>
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <img src={fst} alt="Faculty of Sciences of Tunis Logo" className="w-[70px] h-[70px] object-contain" />
        <div>
          <h3 className="text-lg font-semibold">Faculty of Sciences of Tunis</h3>
          <p className="text-gray-400">Bachelor of Computer Science - Graduated in 2022</p>
        </div>
      </div>
  
      <div className="flex items-center space-x-4">
        <img src={esprit} alt="Esprit Logo" className="w-[70px] h-[50px] object-contain bg-white" />
        <div>
          <h3 className="text-lg font-semibold">Esprit, Tunisia</h3>
          <p className="text-gray-400">Engineering Degree in Computer Science - Graduating in 2025</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <img src={lemans} alt="Le mans Logo" className="w-[70px] h-[50px] object-contain bg-white" />
        <div>
          <h3 className="text-lg font-semibold">Institute of Risk and Insurance of Le Mans, France</h3>
          <p className="text-gray-400">Master Degree in Actuarial Science - Graduating in 2025</p>
        </div>
      </div>
      
    </div>
  </div>
  
  )
}

export default SectionWrapper(Education,"education") ;