import { TreeSearch } from '@eflag/ui';
import { DataNode } from '@eflag/design/es/tree';
import React from 'react';
import './style.less';

interface Node extends DataNode {
  extra: React.ReactNode;
}

const alertMsg = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.stopPropagation();
  alert('test');
};

function dig(path = '0', level = 3) {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = `${path}-${i}`;
    const treeNode = {
      title: key,
      key,
    };

    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
}

const treeData = dig();

export default () => {
  // 渲染title
  const renderTitle = (nodeData: Node) => {
    if (nodeData.extra) {
      return (
        <>
          <span>{nodeData.title}</span>
          <span className="treetitle-extra">{nodeData.extra}</span>
        </>
      );
    }

    return nodeData.title;
  };
  return (
    <div style={{ height: 600 }}>
      <TreeSearch width={500} checkable={false} titleRender={renderTitle} treeData={treeData} />
    </div>
  );
};
