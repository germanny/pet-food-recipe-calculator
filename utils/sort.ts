export function sortArrayByTwoFilterKeys<T>(
  arr: T[],
  sortValue1: string,
  sortValue2: string
): T[] {
  return arr.sort((a: T, b: T) =>
    a[sortValue1] > b[sortValue1]
      ? 1
      : a[sortValue1] === b[sortValue1]
      ? a[sortValue2] > b[sortValue2]
        ? 1
        : -1
      : -1
  );
}

export function arrFilter<T>(arr: T[], filterKey: string, filter: string) {
  return arr.filter((item) => item[filterKey] === filter);
}

export function sortArrayByFilterKey<T>(
  arr: T[],
  filterKey: string,
  asc: boolean = true
) {
  const sorter = asc ? 1 : -1;
  return arr.sort((a, b) => (a[filterKey] > b[filterKey] ? sorter : -sorter));
}
