import SectionWrapper from "../hoc/SectionWrapper";


const Footer = () => {
  return (
    <div className="flex flex-col items-center">
    <p className="text-sm">Design adapted from 'JavaScript Mastery'</p>
    <h2 className="italic font-extrabold">Soli Deo gloria</h2>
    </div>
  )
}

export default SectionWrapper(Footer,"footer") ;