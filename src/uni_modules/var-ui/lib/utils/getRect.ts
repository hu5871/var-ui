

/**
 * getRect 查询节点信息
 * @description 
 * @property {String}	target 标签类名、id、attrs等
 * @property {any}	ctx 组件上下文--this
 * @property {Boolean}	all selectAll 默认false 
 */

function getRect(target: string, ctx: any, all?: false): Promise<UniApp.NodeInfo>;
function getRect(target: string, ctx: any, all: true): Promise<UniApp.NodeInfo[]>;
function getRect(target: string, ctx: any, all?: boolean): Promise<UniApp.NodeInfo | UniApp.NodeInfo[]> {
  return new Promise((resolve) => {
    uni.createSelectorQuery()
      .in(ctx)[all ? 'selectAll' : 'select'](target)
      .boundingClientRect((rect: UniApp.NodeInfo | UniApp.NodeInfo[]) => {
        resolve(rect);
      })
      .exec()
  })
}
export default getRect