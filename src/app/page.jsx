import Image from 'next/image';
import bgMain from '@/../public/bg-main.jpg';

export default function Home() {
    return (
        <div className='relative'>
            <Image
                src={bgMain}
                alt='Japan streets'
            />
            <div className='absolute inset-0 text-white text-center'>
                <div>
                    <h1 className='text-4xl font-bold'>MD Project</h1>
                    <p className='text-xl'>Projeto em desenvolvimento...</p>
                </div>
            </div>
        </div>
    );
}
