const Card = ({ props, onClick, item }) => {
    return (
        <div className=" hover:bg-slate-200 hover:rounded-[20px] w-[250px] flex flex-col items-center h-[350px] drop-shadow-[0_10px_30px_black] m-[20px] ">
            <img className=" w-[150px] " src={props.image} alt={props.title} />
            <h1 className=" font-semibold text-[20px] mt-[20px] ">{props.title}</h1>
            <p className=" mt-[10px] ">{props.desc}</p>
            <p className=" font-mono text-[green] mt-[10px] text-[20px] font-bold ">{props.price}$</p>
            <button className=" btn flex items-center gap-[20px] absolute bottom-7 btn-primary " onClick={onClick}>
                <i className=" fa-solid fa-cart-shopping "></i>
                <span>Add to Cart</span>
            </button>
        </div>
    )
}

export default Card