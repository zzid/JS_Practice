class Fenwick{
    constructor(size,arr){
        this.size = size+1;
        this.tree = Array(size+1).fill(0);
        this.init(arr);
    }
    init = function(arr){
        for(let i=0; i<this.size; i++){
            this.update(i+1,arr[i]);
        }
    }
    update = function(idx, value){
        while(idx< this.size){
            this.tree[idx] += value;
            idx -= idx & -idx;
        }
    }
    sum = function(idx){
        let ret = 0;
        while(idx){
            ret += this.tree[idx];
            idx += idx & -idx;
        }
        return ret;
    }
}
// console.log('hello')
// f = new Fenwick(3,[0,1,2,3])
// console.log(f)