export class Tree<T> {
  value: T;
  parent: Tree<T> | null;
  children: Tree<T>[];

  constructor (value: T, parent: Tree<T> | null, children: Tree<T>[]) {
    this.value = value;
    this.parent = parent !== null ? parent : null;
    this.children = children;
  }

  public getNode() {
    return({
      ...this.value,
      parent: this.parent,
      children: this.children,
    })
  }

  public addChildren(child: Tree<T>[]) {
    this.children.push(...child);
  }

  public addChild(child: Tree<T>) {
    this.children.push(child);
  }

  // public findNode(id: number) {
  //   if
  // }

  public updateNode() {}

  public removeNode() {}
}
