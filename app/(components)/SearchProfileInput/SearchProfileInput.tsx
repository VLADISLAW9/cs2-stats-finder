'use client';

import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { ROUTES } from '@/src/utils/constants';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

const PROFILE_ID_INPUT_NAME = 'profileId';

export const SearchProfileInput = () => {
  const router = useRouter();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const value = formData.get(PROFILE_ID_INPUT_NAME)?.toString();

    if (!value) return;

    router.push(ROUTES.STATS(value));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='relative'>
        <Input
          name={PROFILE_ID_INPUT_NAME}
          placeholder='Type Steam ID or URL'
          className='rounded-full h-12 mt-10'
        />
        <Button type='submit' className='rounded-full absolute top-[46px] right-2'>
          <Search />
        </Button>
      </div>
    </form>
  );
};
