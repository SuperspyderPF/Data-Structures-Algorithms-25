/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    var result =[]
    var queue = [root]
    while(queue.length > 0){
        queue.push(null)
        const level = []
        let head
        while(head = queue.shift()){
            level.push(head.val)
            if(head.left) queue.push(head.left)
            if(head.right) queue.push(head.right)
        }
        result.push(level)
    }
    return result 
    
};