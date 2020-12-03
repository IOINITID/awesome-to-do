interface IItemsData {
  done: boolean;
  fixed: boolean;
  id: string;
  more: boolean;
  title: string;
}
/**
 * @description Return item with title.
 * @param itemsData Items data.
 * @param searchData Search string.
 * @return Items where the name matches the search string.
 */
const onSearch = (itemsData: Array<IItemsData>, searchData: string): Array<IItemsData> => {
  if (itemsData.length) {
    return itemsData.filter((item: IItemsData) => item.title.toLowerCase().indexOf(searchData.toLowerCase()) > -1);
  }

  return itemsData;
};

/**
 * @description Return items by filter type.
 * @param itemsData Items data.
 * @param filterType Filter type.
 * @return Items of this type.
 */
const onFilter = (itemsData: Array<IItemsData>, filterType: string): Array<IItemsData> => {
  switch (filterType) {
    case `all`:
      return itemsData;
    case `done`:
      return itemsData.filter((item: IItemsData) => item.done);
    case `undone`:
      return itemsData.filter((item: IItemsData) => !item.done);
    case `fixed`:
      return itemsData.filter((item: IItemsData) => item.fixed);
    default:
      return itemsData;
  }
};

export {
  onSearch,
  onFilter
};
