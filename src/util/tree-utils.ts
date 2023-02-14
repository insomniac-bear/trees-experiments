// import { INode } from "../components/tree-node/tree-node";
import { IMockTree } from "../const";
import { Tree } from "./tree";

export interface ITreeValue {
  name: string;
  id: number;
}

export const createNode = (node: IMockTree, parentNode: Tree<ITreeValue> | null) => new Tree<ITreeValue>(
  {
    id: node.id,
    name: node.name,
  },
  parentNode ? parentNode : null,
  []
);

export const initTrees = (
  mockTree: IMockTree[],
  rootNode: Tree<ITreeValue>
): Tree<ITreeValue>[] => {
  let result = [];

  let node: Tree<ITreeValue> = {} as Tree<ITreeValue>;
  // let tempParent = rootNode;

  for(let i = 0; i < mockTree.length; i++) {
    // Инициализируем узел
    node = createNode(mockTree[i], rootNode);

    // Добавляем детей
    if (!!mockTree[i].child.length) {
      const children = initTrees(mockTree[i].child, node);
      node.addChildren(children);
    }
    result.push(node);
  }
  return result;
}

// export const initTrees = (
//   mockNodes: IMockTree[],
//   rootNode: Tree<ITreeValue>
// ): Tree<ITreeValue>[] => {
//   let result: Tree<ITreeValue>[] = [];


//   for (let i = 0; i < mockNodes.length; i++) {
//     const mockNode = mockNodes[i];
//     const childNode = createNode(mockNode, rootNode);

//     console.log('i = ', i);
//     console.log(childNode);

//     if (mockNode.child !== null) {
//       initTrees(mockNode.child, childNode);
//     };
//     result = [childNode];
//   }

//   rootNode.addChildren(result);

//   return result;
// }
