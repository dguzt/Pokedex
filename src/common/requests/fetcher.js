import { removeSlashes } from '../format/uri';

async function fetcher(url, uri, init = {}) {
  const params = `${!init.params ? '' : '?'}${new URLSearchParams(init.params).toString()}`;
  const fullUrl = `${removeSlashes(url)}/${removeSlashes(uri)}${params}`;

  console.log('Request ===> ', '000', fullUrl);
  const res = await fetch(fullUrl, init);
  console.log('Request <=== ', res.status, fullUrl);

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
}

export default fetcher;
