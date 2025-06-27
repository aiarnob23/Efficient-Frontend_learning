import { useMemo, useState } from "react";
import { initialItems } from "../../utils/initialItems";

const UseMemoDemo = () => {
 const [count, setCount] = useState(0);
 const [items] = useState(initialItems);

 const selectedIetm = useMemo(
    ()=>items.find((item)=>item.id === count),
    [items, count],
 )
    return (
        <>
        <div>
            count : {count}
        </div>
        <div>
            selected item : {selectedIetm?.id}
        </div>
        <div>
            <button onClick={()=>setCount(count+1)}>Increase count</button>
        </div>
        </>
    )
}

export default UseMemoDemo;