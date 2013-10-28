/* address-book.js
    this is where you will add your JavaScript to complete Lab 5
*/


/* sortObjArray()
    sorts an array of objects by a given property name
    the property values are compared using standard 
    operators, so this will work for string, numeric,
    boolean, or date values

    objArray        array of objects to sort
    propName        property name to sort by

    returns undefined (array is sorted in place)
*/
$(function() {
    sortObjArray(Employees.entries, "last");
    $(".sort-ui .btn").click(sortBy);
});

function sortBy(handler) {
    var sortMethod = $(this).attr("data-sortby"); 
    sortObjArray(Employees.entries, sortMethod);    
}

function render(entries) {
    var template = $(".template");
    var abook = $(".address-book");
    //empties out the address book
    abook.empty();

    //goes through each entry and insert it into the book
    for(int i = 0; i < entries.length; i++) {
        var instance = template.clone();
        instance.find(".first").html(this.first);
        instance.find(".last").html(this.last);
        instance.find("title").html(this.title);
        instance.find('.dept').attr({
            src: this.pic,
            alt: 'Picture of ' + this.first + this.last
        instance.removeClass("template");
        a-book.append(instance);*
    });
}

function sortObjArray(objArray, propName) {
    if (!objArray.sort)
        throw new Error('The objArray parameter does not seem to be an array (no sort method)');

    //sort the array supplying a custom compare function
    objArray.sort(function(a, b) {

        //note: this compares only one property of the objects
        //see the optional step where you can add support for
        //a secondary sort key (i.e., sort by another property)
        //if the first property values are equal
        if (a[propName] < b[propName])
            return -1;
        else if (a[propName] === b[propName])
            return 0;
        else
            return 1;
    });

    render(Employees.entries);  
} 

//I am sort of confused about this lab, but I tried my best-- nothing is showing up :(