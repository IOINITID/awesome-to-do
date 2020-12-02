const onSearch = (itemsData, searchData) => {
  if (itemsData.length) {
    return itemsData.filter((item) => item.title.toLowerCase().indexOf(searchData.toLowerCase()) > -1);
  }

  return itemsData;
};

const onFilter = (itemsData, filterType) => {
  switch (filterType) {
    case `all`:
      return itemsData;
    case `done`:
      return itemsData.filter((item) => item.done);
    case `undone`:
      return itemsData.filter((item) => !item.done);
    case `fixed`:
      return itemsData.filter((item) => item.fixed);
    default:
      return itemsData;
  }
};

export {
  onSearch,
  onFilter
};
