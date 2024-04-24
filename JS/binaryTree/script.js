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
 * @return {number}
 */
function  sumOfLeftLeaves(root) {
    let sum = 0;
    for (let i = 0; i < root.length; i++) {
        if (i % 2 !== 0 && !isNaN(root[i]) && root[i] !== null && root[i] !== undefined) {
            sum += root[i];
        }
    }
    return console.log(sum);
};
root = [3,9,20,null,null,15,7]
sumOfLeftLeaves(root)