import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <section className='header-section'>
      <div className="flex justify-between items-center mx-auto p-3 header">
        <Link to='/'>
          <h1 className='font-bold' href='/'>Qilin Therapeutics</h1>
        </Link>
        <ul className='flex gap-4'>
          <div className='flex justify-between items-center max-w-6xl mx-auto p-3 highlightTextIn container'>
            <Link to='/'>
              <li><a alt='Home'>Home</a></li>
            </Link>
            <Link to='/bdi'>
              <li><a alt='BDI'>BDI</a></li>
            </Link>
            <Link to='/about'>
              <li><a alt='About'>About</a></li>
            </Link>
            <Link to='/profile'>
              {currentUser ? (
                <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
              ) : (
                <li><a alt='Sign In'>Sign In</a></li>
              )}
            </Link>
          </div>
        </ul>
      </div>
    </section>

  );
}



