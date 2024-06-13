
function List()
{
    const list = ["hamza", "hamza1", "hamza2", "hamza3"]
    const MapList = list.map(lis => <li>{lis}</li>)
    return  <ol>{MapList}</ol>;
}

export default List