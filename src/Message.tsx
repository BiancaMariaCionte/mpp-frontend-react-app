// we us .tsx <- for React components

//PascalCasing
function Message()
{
    // here we describe how the UI will look like

    //this is JSX code: JavaScript XML

    const name = '';
    if(name)
        return <h1> Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;