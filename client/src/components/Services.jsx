import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';


const ServiceCard = ({color, title, icon, subtitle}) => {
 <div className="flex flex-row justify-stat items-center white-glassmorphism p-3 m-2  cursor-pointer hover:shawdow-xl">
 <div className={`w-10 h-30 rounded-full flex justify-center items-center ${color}`}>
    {icon}
 </div>
 <div className="ml-5 flex flex-col flex-1">
   <h3>{title}</h3>
   <p>{subtitle}</p>
 </div>
 </div>
}

const Services = () => {
    return (
        <div className="flex  w-full justify-center items-center gradient-bg-services">
        <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12  px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
           <h1 className="text-white tex-3xl sm:text-5xl py-2 text-gradient">Services that we
           <br/>
           continue to improve
           </h1>
        </div>
        </div>
        <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard 
            color="bg-[#2952E3]"
            title="Sercurity Guaranteed"
            icon={<BsShieldFillCheck  fontSize={21} className="text-white"/>}
            subtitle="Security is 100% Guaranteed. We maintain privacy. "
        />

        </div>
        </div>
    );
}

export default Services;