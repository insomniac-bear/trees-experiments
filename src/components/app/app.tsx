import { FC, useState } from 'react';
import { TreeNode } from '../tree-node/tree-node';
import { mockTree } from '../../const';
import { createNode, initTrees } from '../../util/tree-utils';

export const App: FC = () => {
  const [tree] = useState(mockTree);

  const rootNode = createNode(tree[0], null);
  const rootElem = initTrees(mockTree[0].child, rootNode);

  return(
    <div>
      {
        rootElem.map((mockNode, index) => <TreeNode node={mockNode} level={0} key={index} />)
        // tree.map(mockNode => <TreeNode node={mockNode} level={0} />)
      }
    </div>
  );
}