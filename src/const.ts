// import { INode } from "./components/tree-node/tree-node";

export interface IMockTree {
  id: number,
  name: string,
  parentId: number | null;
  child: IMockTree[];
}

export const mockTree: IMockTree[] = [
  {
    id: 0,
    name: 'Ivan',
    parentId: null,
    child: [
      {
        id: 1,
        name: 'Semen',
        parentId: 0,
        child: [],
      },
      {
        id: 2,
        name: 'Daria',
        parentId: 0,
        child: [
          {
            id: 3,
            parentId: 2,
            name: 'Peter',
            child: [
              {
                id: 6,
                name: 'Nataliya',
                parentId: 3,
                child: [
                  {
                    id: 7,
                    parentId: 6,
                    name: 'test1',
                    child: [
                      {
                        id: 10,
                        parentId: 7,
                        name: 'test11',
                        child: []
                      },
                    ],
                  },
                  {
                    id: 8,
                    parentId: 6,
                    name: 'test2',
                    child: [],
                  },
                  {
                    id: 9,
                    parentId: 6,
                    name: 'test3',
                    child: [],
                  },
                ],
              }
            ],
          },
          {
            id: 4,
            name: 'Ylia',
            parentId: 2,
            child: [],
          },
          {
            id: 5,
            name: 'Mariya',
            parentId: 2,
            child: [],
          },
        ],
      }
    ],
  }
];
