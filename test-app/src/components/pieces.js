const pieces = [ // eslint-disable-line
    {
        matrix: [
            [1],
            [1],
        ],
        time: 1,
        cost: 2,
        income: 0
    },
    {
        matrix: [
            [1, 1],
            [1, 0],
            [1, 1]
        ],
        time: 2,
        cost: 1,
        income: 0
    },
    {
        matrix: [
            [1, 0],
            [1, 1],
            [1, 1]
        ],
        time: 2,
        cost: 2,
        income: 0
    },
    {
        matrix: [
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0]
        ],
        time: 4,
        cost: 5,
        income: 2
    },
    {
        matrix: [
            [1]
        ],
        time: 0,
        cost: 0,
        income: 0
    },
    {
        matrix: [
            [1, 0],
            [1, 1],
            [0, 1]
        ],
        time: 6,
        cost: 7,
        income: 3
    }, {
        matrix: [
            [0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0]
        ],
        time: 4,
        cost: 1,
        income: 1
    },
    {
        matrix: [
            [0, 0, 0, 1],
            [1, 1, 1, 1],
            [0, 0, 0, 1]
        ],
        time: 2,
        cost: 7,
        income: 2
    },
    {
        matrix: [
            [0, 1, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 1, 0]
        ],
        time: 1,
        cost: 4,
        income: 0
    },
    {
        matrix: [
            [1, 1, 1, 1, 1]
        ],
        time: 1,
        cost: 7,
        income: 1
    },
    {
        matrix: [
            [1, 0, 1],
            [1, 1, 1],
            [1, 0, 1]
        ],
        time: 3,
        cost: 2,
        income: 0
    },
    {
        matrix: [
            [1, 0, 0, 0],
            [1, 1, 1, 1]
        ],
        time: 3,
        cost: 10,
        income: 2
    },
    {
        matrix: [
            [1, 1, 0],
            [0, 1, 1]
        ],
        time: 2,
        cost: 3,
        income: 1
    },
    {
        matrix: [
            [1, 0, 0, 1],
            [1, 1, 1, 1]
        ],
        time: 5,
        cost: 1,
        income: 1
    },
    {
        matrix: [
            [0, 1, 0, 0],
            [1, 1, 1, 1],
            [0, 1, 0, 0]
        ],
        time: 3,
        cost: 0,
        income: 1
    },
    {
        matrix: [
            [0, 1, 1, 0],
            [1, 1, 1, 1],
            [0, 1, 1, 0]
        ],
        time: 3,
        cost: 5,
        income: 1
    },
    {
        matrix: [
            [1, 1, 1, 1],
            [0, 1, 1, 0]
        ],
        time: 4,
        cost: 7,
        income: 2
    },
    {
        matrix: [
            [1, 0, 0],
            [1, 1, 0],
            [0, 1, 1]
        ],
        time: 4,
        cost: 10,
        income: 3
    },
    {
        matrix: [
            [1, 1],
            [0, 1],
            [0, 1]
        ],
        time: 6,
        cost: 4,
        income: 2
    },
    {
        matrix: [
            [1, 0, 1],
            [1, 1, 1],
            [0, 1, 0]
        ],
        time: 6,
        cost: 3,
        income: 2
    },
    {
        matrix: [
            [0, 1, 1, 1],
            [1, 1, 1, 0]
        ],
        time: 2,
        cost: 4,
        income: 0
    },
    {
        matrix: [
            [1, 0],
            [1, 0],
            [1, 1]
        ],
        time: 2,
        cost: 4,
        income: 1
    },
    {
        matrix: [
            [1, 0],
            [1, 1]
        ],
        time: 3,
        cost: 1,
        income: 0
    },
    {
        matrix: [
            [1],
            [1],
            [1]
        ],
        time: 2,
        cost: 2,
        income: 0
    },
    {
        matrix: [
            [1, 1, 1, 1]
        ],
        time: 3,
        cost: 3,
        income: 1
    },
    {
        matrix: [
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0]
        ],
        time: 4,
        cost: 5,
        income: 0
    }, {
        matrix: [
            [0, 0, 1, 0],
            [1, 1, 1, 1]
        ],
        time: 4,
        cost: 3,
        income: 1
    },
    {
        matrix: [
            [1, 0, 0],
            [1, 1, 1],
            [1, 0, 0]
        ],
        time: 5,
        cost: 5,
        income: 2
    },
    {
        matrix: [
            [1, 1, 0, 0],
            [0, 1, 1, 1]
        ],
        time: 3,
        cost: 2,
        income: 1
    },
    {
        matrix: [
            [1, 1, 0],
            [1, 1, 1],
            [0, 0, 1]
        ],
        time: 6,
        cost: 8,
        income: 3
    },
    {
        matrix: [
            [1, 1, 0, 0],
            [1, 1, 1, 1]
        ],
        time: 5,
        cost: 10,
        income: 3
    },
    {
        matrix: [
            [0, 1],
            [1, 1]
        ],
        time: 1,
        cost: 3,
        income: 0
    },
    {
        matrix: [
            [0, 0, 0, 1],
            [1, 1, 1, 1],
            [1, 0, 0, 0]
        ],
        time: 2,
        cost: 1,
        income: 0
    },
    {
        matrix: [
            [1, 1],
            [1, 1]
        ],
        time: 5,
        cost: 6,
        income: 2
    },
    {
        matrix: [
            [0, 1],
            [1, 1],
            [0, 1]
        ],
        time: 2,
        cost: 2,
        income: 0
    }
]