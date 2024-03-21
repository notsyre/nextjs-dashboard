import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';



export default function Page() {
  return (
    <main className="flex h-screen flex-col p-6 bg-gradient-to-t from-black to-slate-800">
      <div className="flex h-20 items-center rounded-l-full bg-gradient-to-r from-red-500 to-transparent p-0 md:h-52">
        <Image 
        className='pl-12 hidden md:block'
        src='/LogoDoria.png'
        alt='screenshots of the dashboard'
        width={250}
        height={100}
        />
        <Image 
        className='pl-12 block md:hidden'
        src='/LogoDoria.png'
        alt='screenshots of the dashboard'
        width={130}
        height={100}
        />
      </div>
      <div className="mt-12 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 ring-4 ring-offset-4 ring-offset-red-500 hover:ring-offset-blue-800 rounded-r-full backdrop-blur-sm bg-black/10 px-6 py-10 md:w-2/5 md:px-20">
          <a className={"text-xl md:text-3xl text-white  hover:opacity-80 transition-opacity"}>
            <span className={styles.Letters}>Bienvenido</span> Registra tu propia cesantía.
          </a>
          <Link
            href="/register"
            className="flex items-center gap-5 self-start rounded-lg shadow-lg transition ease-in-out delay-150  bg-red-500 shadow-red-500/60 hover:translate-y-1 hover:scale-110 hover:bg-blue-800 hover:shadow-blue-500 duration-300 px-6 py-3 text-sm font-medium text-white md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className=" flex items-center justify-end p-6 md:w-3/5 md:px-36 md:py-5">
 
          {/*
          <Image
          className=" rounded-lg skew-x-6 z-0 blur-md absolute scale-105 "
          src='/CESANTIAS.png'
          alt='screen'
          width={600}
          height={933}
          />
          <Image
          className=" rounded-lg skew-x-6 -z-0 absolute pr-8 "
          src='/CESANTIAS.png'
          alt='screen'
          width={570}
          height={933}
          />

            */}
        
        </div>
      </div>
    </main>
  );
}
