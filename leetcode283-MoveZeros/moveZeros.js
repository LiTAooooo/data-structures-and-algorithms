/* 问题：给定一个数组nums，编写一个函数将内部所有的0元素移至数组末尾，
*  而保持非0元素在原数组中的相对位置。
*  如，输入：[0,1,0,3,12]，输出：[1,3,12,0,0]
*/

//solution1
//时间复杂度：O(n)
//空间复杂度：O(1)
var moveZeroes = function(nums) {
    var nonZeroElements = [],
        i;

    for( i = 0; i < nums.length; i++ ) {     //遍历数组中的所有非0元素，放入nonZeroElements中
        if ( nums[i] ) {
            nonZeroElements.push( nums[i] );
        }
    }
    
    for( i = 0; i < nonZeroElements.length; i++ ) {   //将nonZeroElements中的非0元素依次放回原数组
        nums[i] = nonZeroElements[i];
    }
    
    for(i = nonZeroElements.length; i < nums.length; i++) { //将原数组中的剩余元素赋值为0
        nums[i] = 0;
    }
};


//solution2
//时间复杂度：O(n)
//空间复杂度：O(1)

var moveZeroes = function(nums) {
    var i,
        k = 0;
    for( i = 0; i < nums.length; i++ ) {
        if( nums[i] ) {
            nums[k++] = nums[i];
        }
    }

    for( i = k; i < nums.length; i++) {
        nums[i] = 0;
    }
}

//solution3
var moveZeroes = function(nums) {
    var i,
        k = 0,
        temp;
    for( i = 0; i < nums.length; i++ ) {
        if( nums[i] ) {
            temp = nums[k];
            nums[k++] = nums[i];
            nums[i] = temp;
        }
    }
}

//solution4
var moveZeroes = function(nums) {
    var i,
        k = 0,
        temp;
    for( i = 0; i < nums.length; i++ ) {
        if( nums[i] ) {
            if( i !== k ) {
                temp = nums[k];
                nums[k++] = nums[i];
                nums[i] = temp;
            } else {
                k++;
            }
        }
    }
}
