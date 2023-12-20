import { SearchProps } from '@/types/search.type';

export default function Search({ search, setSearch }: SearchProps) {
  return (
    <form
      action=""
      className="searchForm"
      onSubmit={(evt) => evt.preventDefault()}
    >
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={(evt) => setSearch(evt.target.value)}
      />
    </form>
  );
}
