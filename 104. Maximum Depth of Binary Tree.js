
dfs=n=>{if(!n) return 0; return Math.max(1 + dfs(n.left), 1 + dfs(n.right))};maxDepth = r => dfs(r)
        
        



    
 
// time & space  O(n)