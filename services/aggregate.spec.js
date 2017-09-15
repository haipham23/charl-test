const { expect } = require('chai');

const aggregate = require('./aggregate');

describe('aggregate function', () => {
  it('should work', () => {
    const INPUT = [{
      type: 'Person',
      order: 1,
      name: 'Brian',
    }, {
      type: 'Place',
      order: 2,
      name: 'Ohio',
    }, {
      type: 'Place',
      order: 12,
      name: 'Ohio',
    }, {
      type: 'Person',
      order: 14,
      name: 'Sarah',
    }, {
      type: 'Person',
      order: 199,
      name: 'Sam',
    }, {
      type: 'Person',
      order: 19,
      name: 'Eric',
    }, {
      type: 'Place',
      order: 20,
      name: 'Home',
    }];

    const OUTPUT = [
      {
        "type": "Person",
        "order": 1,
        "people": [
          "Brian"
        ]
      },
      {
        "type": "Place",
        "order": 2,
        "name": "Ohio"
      },
      {
        "type": "Place",
        "order": 12,
        "name": "Ohio"
      },
      {
        "type": "Person",
        "order": 19,
        "people": [
          "Sarah",
          "Eric"
        ]
      },
      {
        "type": "Place",
        "order": 20,
        "name": "Home"
      },
      {
        "type": "Person",
        "order": 199,
        "people": [
          "Sam"
        ]
      }
    ];

    const result = aggregate(INPUT);

    expect(result).to.deep.equal(OUTPUT);
  });
});
