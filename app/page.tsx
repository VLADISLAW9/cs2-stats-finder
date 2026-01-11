import { Search } from 'lucide-react';

import { SearchProfileInput } from './(components)';

const Home = () => (
  <div className='flex items-center justify-center h-[50vh]'>
    <div>
      <div className='flex items-center gap-3'>
        <Search size='35' />
        <h1 className='font-extrabold text-3xl'>One search for all stats by CS 2 and Steam</h1>
      </div>
      <SearchProfileInput />
    </div>
  </div>
);

export default Home;
