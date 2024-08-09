async function main()
{
    const data = await fetch("https://opentdb.com/api.php?amount=10")
    .then((res)=> {
        return res.text();
    })
    .catch((err)=> console.error(err));
    console.log(data);
}
main();

