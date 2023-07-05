import { useDebounce } from 'data/hooks/use-debounce';
import { useEffect, useState } from 'react';

interface useSearchProps {
  search: string;
}

interface useSearchResponse {
  search: string;
}

export const useSearchNoPagination = (props: useSearchProps): useSearchResponse => {
  const [call, setCall] = useState(true);
  const [search, setSearch] = useState(props.search);

  useEffect(
    () => setSearch(props.search),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [call]
  );

  useDebounce(() => setCall(!call), [props.search], 500);

  return { search };
};
