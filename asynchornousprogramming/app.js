function foo()
{
    console.log("foo");
}

function bar()
{
    console.log("bar");
}
function baz()
{
    console.log("baz");
}

bar();
setTimeout(foo,1000);
// console.log('baz')
baz();


//bar baz foo ..output