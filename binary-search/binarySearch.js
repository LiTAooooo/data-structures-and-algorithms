/*
*  函数名：binarySearch
*  功能：对一个有序(默认升序)数组进行二分查找，并返回目标在数组中的索引
*  arr：需要进行查找的数组
*  n： 数组的长度
*  target： 待查找的目标
*  返回值：若查找到，则返回目标在数组中的下标，否则返回-1
*/

binarySearch(arr, n, target) {
    let l = 0, r = n - 1;               //在[l...r]的范围里查找target
    while (l <= r) {                    //当l=r时，区间[l...r]仍然有效
        let mid = l + (r - l) / 2;      //防止整型溢出
        if (arr[mid] === target) {
            return mid;
        }
        if (target > arr[mid]) {        
            l = mid + 1;                //target在[mid+1...r]中
        } else {                        //target < arr[mid]     
            r = mid - 1;                //target在[l...mid-1]中
        }
    }
    return -1;
}