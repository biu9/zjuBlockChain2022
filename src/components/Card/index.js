import useReadContractData from "../../hooks/useReadContractData"

export default function Card({ contractAddress }) {
	const { title, content, proposer, agree, disagree,ifExpired } = useReadContractData(contractAddress);
	const cardBorderStyles = [
		"bg-stdBg p-6 min-w-96 shadow-std rounded-xl flex space-x-3 transform transition duration-1000 translate-x-0 relative z-10 border-l-8 border-green-600",
		"bg-stdBg p-6 min-w-96 shadow-std rounded-xl flex space-x-3 transform transition duration-1000 translate-x-0 relative z-10 border-l-8 border-red-600"
	]
	return (
		<div className="relative">
			<div
				id="card"
				className={ifExpired ? cardBorderStyles[1] : cardBorderStyles[0]}>
				<img
					className="w-32 rounded-xl"
					src="https://typora-1309407228.cos.ap-shanghai.myqcloud.com/78216842_p2.jpg"
					alt=""
				/>
				<div className="font-mono text-sm flex flex-col justify-center">
					<div>{title}</div>
					<div>{content}</div>
					<div>by:{proposer}</div>
					<div>agree:{agree} | disagree:{disagree}</div>
					<div>address:{contractAddress}</div>
				</div>
			</div>
			<div
				id="voteChoice"
				className="absolute z-0 top-0 left-0 flex justify-between w-full h-full items-center transform transition duration-1000">
				<div className="bg-green-600 w-full h-full shadow-xl flex items-center rounded-l-xl">
					<div className="border-8 w-32 h-32 rounded-full mx-6"></div>
				</div>
				<div className="bg-red-600 w-full h-full rounded-r-xl shadow-xl flex items-center justify-end">
					<div className="border-8 w-32 h-32 rounded-full mx-6"></div>
				</div>
			</div>
		</div>
	)
}