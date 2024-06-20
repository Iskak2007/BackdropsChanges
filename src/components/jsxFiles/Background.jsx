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
            <div className="flex justify-center" >
             <div className="w-full justify-center">  
                  <div className="h-full mt-10 flex ml-32 flex-col">
                    <h1 className="text-4xl font-bold">Thematic Backgrounds</h1>
                    <h2 className="text-xl text-gray-500">Whimsical handcrafted backdrops in different styles</h2>
                </div>
                <div  className="w-full flex justify-center h-full" onClick={onHandleClick}>
                <img className='w-[60%] h-[80%] flex justify-center absolute' src={backdrop} alt="" />
                <img className='w-96 translate-y-20 flex justify-center absolute' src={bycicle} alt="" />
                </div>
                </div>
            </div>
            {click ?  <div  className='flex rounded-lg flex-col shadow-xl fixed gap-3 p-5 right-32 top-32 border bg-white border-black'>
                    <img onClick={() => setBackdrop(background)} className="w-full" src={background} alt="" />
                    <img  onClick={() => setBackdrop(ocean)} className="w-full" src={ocean} alt="" />
                </div> : "" }
        </>
    )
}
export default ChangeBG