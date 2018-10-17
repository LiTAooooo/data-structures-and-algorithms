var removeElement = function(nums, val) {
    var k = 0,
        i;
    for ( i = 0; i < nums.length; i++ ) {
        if ( nums[i] !== val ) {
            if ( i !== k) {
                nums[k++] = nums[i];
            } else {
                k++;
            }
        }
    }
    return k;
};