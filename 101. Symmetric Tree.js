isSymmetric=(r,x)=>{if(x===undefined){x=r.right;r=r.left;}if(r===null&&x===null)return true;if(r===null||x===null||r.val!==x.val)return false; return isSymmetric(r.left,x.right)&&isSymmetric(r.right,x.left)}