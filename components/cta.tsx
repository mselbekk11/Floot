import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

export default function CTA() {
  return (
    <div className='rounded-xl border border-purple-300 bg-[#ffffff] overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_2fr]'>
      <div className='relative'>
        <Image
          src='/globe.png'
          alt=''
          fill
          className='object-cover'
        />
      </div>
      <div className='flex flex-col justify-center px-8 py-10 md:px-12'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-900'>
          Run Secure Apps Close to Your Users, Effortlessly
        </h2>
        <p className='text-zinc-600 mt-4 text-lg font-bricolage-grotesque'>
          All the security benefits of a modern, memory hardened, virtualization
          environment without the hassle.
        </p>
        <div className='mt-6'>
          <Button variant='floottwo' asChild>
            <Link href='#'>Speedrun Your App</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
