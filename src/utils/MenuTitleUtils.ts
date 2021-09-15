const renderMenuTitle = (data: any) => {
  const valuesArr = Object.values(data);
  const obj = { flag: false, title: "" };
  valuesArr.map(value => {
    if (value && Array.isArray(value)) {
      value.map(item => {
        renderMenuTitle(item);
        obj.flag = false;
      });
    } else {
      obj.title = data.title;
      obj.flag = true;
    }
  });
  return obj;
};

export { renderMenuTitle };
