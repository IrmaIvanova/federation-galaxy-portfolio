import { PluginItem, types} from '@babel/core'


// вариант chatGPT
export function removeDataTestBabelPlugin(): PluginItem {

    return {
        visitor: {
            JSXAttribute(path, state) {

                const forbiddenProps: string[] = state.opts.props || [];
                
                const attrNameNode = path.node.name;

                // Проверяем, что это JSXIdentifier
                if (!types.isJSXIdentifier(attrNameNode)) {
                    return;
                }

                const name = attrNameNode.name;

                if (forbiddenProps.includes(name)) {
                    path.remove();
                }
            }
        }
    };
}

// Вариант UlbiTV
// export function removeDataTestBabelPlugin(): PluginItem {
//     return {
//         visitor: {
//             Program(path, state) {
//                 const forbiddenProps = state.opts.props || [];
//                 path.traverse({
//                     JSXIdentifier(current) {
//                         const nodeName = current.node.name;
//                         if (forbiddenProps.includes(nodeName)) {
//                             current.parentPath.remove()
//                         }
//                     }
//                 })
//             }
//         }
//     }
// }