import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

function Home() {
  const pathname = usePathname();
  
  return (
    <div 
      className={clsx(
        'container min-h-screen w-full p-5',
        'transition-colors duration-300 ease-in-out',
        {
          'dark-mode bg-gray-800 text-white': pathname === '/dark-mode',
          'bg-white text-gray-900': pathname === '/light-mode'
        }
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold mb-4">
          Current Theme: {pathname === '/dark-mode' ? 'Dark Mode' : 'Light Mode'}
        </h1>
        
        <div className="flex gap-4">
          <Link 
            href="/dark-mode"
            className={clsx(
              'px-4 py-2 rounded-md transition-colors',
              'border-2 border-current',
              pathname === '/dark-mode' 
                ? 'bg-gray-700 text-white' 
                : 'hover:bg-gray-200'
            )}
          >
            Dark-Mode
          </Link>
          
          <Link 
            href="/light-mode"
            className={clsx(
              'px-4 py-2 rounded-md transition-colors',
              'border-2 border-current',
              pathname === '/light-mode'
                ? 'bg-white text-gray-900'
                : 'hover:bg-gray-100'
            )}
          >
            Light-Mode
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;