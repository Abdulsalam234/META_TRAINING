// The filter() method
// Another very useful method on the array is the filter() method. It filters your arrays based on a specific test. Those array items that pass the test are returned

const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})