class Fenwick{
    constructor(size,arr){
        this.size = size;
        this.tree = Array(size+1).fill(0);
        this.init(arr);
    }
    init = function(arr){
        for(let i=1; i<=this.tree.size(); i++){
            this.update(i,arr[i])
        }
    }
    update = function(idx, value){
        while(idx< size){
            tree[idx] += value;
            idx -= idx & -idx;
        }
    }
    sum = function(idx){
        let ret;
        while(idx){
            ret += tree[idx]
            idx += idx & -idx
        }
        return ret;
    }
}