const filterMenuTitle = (data: any) => {
  const valuesArr = Object.values(data);
  const obj = { isBtnTitle: false, title: "" };
  valuesArr.forEach(value => {
    if (value && Array.isArray(value)) {
      value.forEach(item => {
        filterMenuTitle(item);
        obj.isBtnTitle = false;
      });
    } else {
      obj.title = data.title;
      obj.isBtnTitle = true;
    }
  });
  return obj;
};

const addTreeNode = (data: any, key: string, ifAdd: boolean) => {
  if (ifAdd) {
    const parentElementKey = key.slice(0, -2);
    data.forEach((item: any) => {
      if (item.key === parentElementKey) {
        const newElement = {
          title: "new son",
          key: `${item.key}-${item.children.length}`,
          children: [
            {
              title: `new son button`,
              key: `${item.key}-${item.children.length}-0`,
              ifAdd: true
            }
          ]
        };
        item.children.push(newElement);
      } else if (item.children) {
        addTreeNode(item.children, key, ifAdd);
      }
    });
  }
  return data;
};

export { filterMenuTitle, addTreeNode };
