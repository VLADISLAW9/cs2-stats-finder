'use client';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { ROUTES } from '@/src/utils/constants';
import { Search } from 'lucide-react';

import { redirect } from 'next/navigation';
import { FormEvent } from 'react';

const PROFILE_ID_INPUT_NAME = 'profileId';

export const SearchProfileInput = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const value = formData.get(PROFILE_ID_INPUT_NAME);

    if (!value) return;

    redirect(ROUTES.STATS(value.toString()));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='relative'>
        <Input
          name={PROFILE_ID_INPUT_NAME}
          placeholder='Type Steam 64 ID...'
          className='rounded-full h-12 mt-10'
        />
        <Button type='submit' className=' rounded-full absolute top-[46px] right-2'>
          <Search />
        </Button>
      </div>
    </form>
  );
};
