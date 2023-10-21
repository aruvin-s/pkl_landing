import CardProperty from '../components/CardProperty'


function RecentProperties() {

    return (
    <div className="flex w-screen items-center justify-center">
        <div>
            <div className='text-4xl text-center font-bold text-green-950 mt-12'>
                Our Recent Properties
            </div>
            <div className='my-6'>
                <div className='flex'>
                    <CardProperty />
                    <CardProperty />
                </div>
                <div className='flex'>
                    <CardProperty />
                    <CardProperty />
                </div>
            </div>
        </div>
    </div>
    )
  }
  
export default RecentProperties
  