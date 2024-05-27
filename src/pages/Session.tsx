import SessionPlayer from "@/components/Session/SessionPlayer"
import SessionContent from "@/components/Session/SessionContent"

function Session() {
    return (
        <div className='bg-darkPrimary text-white h-screen w-full pt-4'>
            <div className="flex h-[600px] gap-2">
                <div className="w-[80%] md:w-[70%] flex items-center justify-center" >
                    <SessionPlayer />
                </div>
                <div className="w-[20%] md:w-[30%] px-4" >
                    <SessionContent />
                </div>
            </div>
            ll

        </div>
    )
}

export default Session