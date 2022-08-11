export function groupBy(collection, key) {

  return collection.reduce(function (groups, item) {
    const val = item[key];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    console.log(val);
    return groups;
  }, {});
}


