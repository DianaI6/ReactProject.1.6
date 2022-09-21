import Button from "../components/Button";

function Category({isMobile, setIsMobile, isTv, setIsTv, isLaptop, setIsLaptop, isEarphones, setIsEarphones, isCamera, setIsCamera}) {
    return (
        <div className="flex flex-col p-4 gap-4">
            <Button isActive={isMobile}  onClick={()=> setIsMobile(true)}>ტელეფონები </Button>
            <Button isActive={isTv} onClick={()=> setIsTv(true)}>ტელევიზორები</Button>
            <Button isActive={isLaptop} onClick={()=> setIsLaptop(true)}>ლეპტოპები</Button>
            <Button isActive={isEarphones} onClick={()=> setIsEarphones(true)}>ყურსასმენები</Button>
            <Button isActive={isCamera} onClick={()=> setIsCamera(true)}>კამერები</Button>
        </div>
    );
}


export default Category;