import CardTestimony from "./CardTestimony"


function Testimony() {

    return (
    <div className="flex w-screen items-center justify-center">
        <div>
            <div className='text-4xl text-center font-bold text-green-950 mt-12'>
                Satisfied Costumer
            </div>
            <div className='flex my-6'>
            <CardTestimony />
            <CardTestimony />
            </div>
        </div>
    </div>
    )
  }
  
export default Testimony
  