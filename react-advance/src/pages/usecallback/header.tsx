import { memo } from "react";

const Header = ({arg , getarg} : {arg:string , getarg:() => string}) => {
    console.log("Header component rendered");
  return (
    <>
    <div className="text-blue-400">Header : {arg}</div>
    <button onClick={getarg}>{getarg()}</button></>
  );
};

export default memo(Header);