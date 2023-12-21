import { ApiRequestProps } from '@/types/api-request.type';

export default async function ApiJsonPlaceholder({
  url,
  options,
  errMessage,
}: ApiRequestProps) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw Error(`Error fetching data from ${url}`);
  } catch (err) {
    if (err instanceof Error)
      console.error(`\x1b[31mError during request: ${err.message}`);
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return errMessage;
  }
}
