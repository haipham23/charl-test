const aggregate = (input) => {
  const output = [];

  input
    .sort((a, b) => a.order > b.order)
    .map(i => {
      if (i.type === 'Person') {
        const newObj = Object.assign({}, i, { people: [i.name] });
        delete newObj.name;
        return newObj;
      }

      return i;
    })
    .forEach(obj => {
      const outputLength = output.length - 1;
      const lastItem = output[outputLength];

      if (lastItem && lastItem.people && lastItem.type === obj.type) {
        output[outputLength].people.push(obj.people[0]);
        output[outputLength].order = obj.order;

        return;
      }

      return output.push(obj);
    });

  return output;
};

module.exports = aggregate;