

import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'tr'];

export default getRequestConfig(async () => {

  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('locale')?.value;


  const locale = locales.includes(cookieLocale ?? '') ? cookieLocale! : 'tr';

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});



