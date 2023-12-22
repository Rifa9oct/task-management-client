
const Header = ({text, bg, count}) => {
    return (
        <div className={`${bg} flex items-center h-12 px-20 rounded-lg font-bold text-lg text-white`}>
            <h1 className="mr-2">{text}</h1>
            <p className="bg-white w-6 h-6 text-black rounded-full flex items-center justify-center">{count}</p>
        </div>
    );
};

export default Header;