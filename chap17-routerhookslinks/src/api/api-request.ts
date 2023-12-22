import { ApiRequestProps } from '@/types/api-request.type';

export default async function ApiRequest({
  url,
  options,
  errMessage,
}: ApiRequestProps) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw Error('Error during request! Reload the page...');
  } catch (err: unknown) {
    if (err instanceof Error)
      errMessage = `\x1b[31mError during request: ${err.message}`;
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return errMessage;
  }
}
