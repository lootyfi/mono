export default function Page({ params }: { params: { slug: string } }) {
    return <div className='flex w-full'>
        <div className='flex flex-col w-full justify-center mt-32 mx-auto max-w-7xl text-center'>
            <h1 className='text-[70px] text-white '>Your <span className='text-[#B73FFF]'>{params.slug}</span></h1>
            <p className='flex font-sans text-[#D7CCE0] w-full justify-center mt-4'>
                You can find all your rewards on this page.
            </p>
        </div>
    </div>
}