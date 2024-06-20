import { motion } from "framer-motion"
import bycicle from '../../assets/bycicle.svg'
import background from '../../assets/background.svg'
import ocean from '../../assets/ocean.svg'
import { useState } from "react"
function ChangeBG() {
    const [click, setClick] = useState(false);
    function onHandleClick() {
        setClick(!click)
    }
    
    const [backdrop, setBackdrop] = useState(background);

    return(
        <>
            <div className="flex w-svw-100 h-svh-100 justify-center" onClick={onHandleClick}>
             <div className="w-full justify-center mt-[5%]">  
                  <div className="h-full mt-10 h-svh-100 flex ml-32 flex-col flex-wrap">
                    <h1 className="text-4xl ">Thematic Backgrounds</h1>
                    <h2 className="text-xl text-gray-500">Whimsical handcrafted backdrops in different styles</h2>
                </div>
                <div  className="w-full flex justify-center h-full">
                <img className='w-96 flex justify-center absolute' src={backdrop} alt="" />
                <img className='w-96 z-20 flex justify-center absolute' src={bycicle} alt="" />

                </div>

                </div>
            </div>
            {click ?  <div  className='flex rounded-lg flex-col fixed gap-3 p-5 right-32 top-32 border border-black'>
                    <img onClick={() => setBackdrop(background)} className="w-full" src={background} alt="" />
                    <img  onClick={() => setBackdrop(ocean)} className="w-full" src={ocean} alt="" />
                </div> : "" }
        </>
    )
}
export default ChangeBG