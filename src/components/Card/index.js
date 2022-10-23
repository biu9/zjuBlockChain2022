export default function Card() {
    return (
        <div 
        id="card"
        className="bg-stdBg p-6 w-96 shadow-std rounded-xl flex space-x-3 transform transition duration-1000 translate-x-0">
            <img
            className="w-32 rounded-xl"
            src="https://typora-1309407228.cos.ap-shanghai.myqcloud.com/78216842_p2.jpg"
            alt=""
            />
            <div className="font-mono">
                Alice
            </div>
        </div>
    )
}