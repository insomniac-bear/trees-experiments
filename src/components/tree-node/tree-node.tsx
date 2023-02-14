import { FC, FormEvent, useState } from 'react';
import { ITreeValue } from '../../util/tree-utils';
import { Tree } from '../../util/tree';

export interface INode {
  id: number;
  name: string;
  parent: Tree<ITreeValue> | null;
  child: INode[];
}

interface ITreeNode {
  node: Tree<ITreeValue>;
  level: number;
}

export const TreeNode: FC<ITreeNode> = ({ node, level }) => {
  const [isAdd, setIsAdd] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onClick = () => {
    setIsAdd((prevState) => !prevState);
  }

  const onFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const newChild = new Tree<ITreeValue>(
      {
        id: Math.random(),
        name: inputValue,
      },
      node,
      []
    );
    node.addChild(newChild);
    console.log(node);
  }

  return(
    <div
      key={Math.random()}
      style={{
        marginLeft: level * 10 + 'px',
      }}
      >
      <p
        onClick={onClick}
      >
        {node.value.name}
      </p>
      {
        isAdd &&
        <form onSubmit={onFormSubmit}>
          <input
            type='text'
            placeholder='Input name'
            onChange={(evt) => setInputValue(evt.target.value)}
          />
          <button type='submit'/>
        </form>
      }
      {
        !!node.children.length &&
        node.children.map((childNode, index) => {
          return(
            <TreeNode node={childNode} level={level + 1} key={index} />
          )
        })
      }
    </div>
  );
};
