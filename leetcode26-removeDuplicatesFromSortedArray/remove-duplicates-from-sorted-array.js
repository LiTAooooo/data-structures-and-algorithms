var removeDuplicates = function(nums) {
    if ( !nums.length ) {               //处理数组为空的情况
        return 0;
    }

//关键思路：要与结果数组的最后一个值比较

    var k = 0,
        i;
    for ( i = 1; i < nums.length; i++ ) {
        if ( nums[i] !== nums[k] ) {
            if ( i !== k + 1 )  {
                nums[++k] = nums[i];
            } else {
                k++;
            }    
        }
    }
    return k + 1;
};