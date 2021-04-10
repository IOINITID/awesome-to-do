/**
 * @description Return item with title.
 * @param itemsData Items data.
 * @param searchData Search string.
 * @return Items where the name matches the search string.
 */
const onSearch = (itemsData, searchData: string) => {
  if (itemsData.length) {
    return itemsData.filter((item) => item.value.toLowerCase().indexOf(searchData.toLowerCase()) > -1);
  }

  return itemsData;
};

/**
 * @description Return items by filter type.
 * @param itemsData Items data.
 * @param filterType Filter type.
 * @return Items of this type.
 */
const onFilter = (itemsData, filterType: string) => {
  switch (filterType) {
    case 'all':
      return itemsData;
    case 'done':
      return itemsData.filter((item) => item.done);
    case 'undone':
      return itemsData.filter((item) => !item.done);
    case 'fixed':
      return itemsData.filter((item) => item.fixed);
    default:
      return itemsData;
  }
};

export { onSearch, onFilter };
