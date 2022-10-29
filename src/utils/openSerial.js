
export default async function openSerial(setSerialRecv) {
    if ("serial" in navigator) {
        const port = await navigator.serial.requestPort();
        //打开串口
        await port.open({
            baudRate: 9600, // 波特率
            //dataBits: 8, // 每帧的数据位数(7或8)
            parity: 'none', // 校验模式，可以是none，偶数，奇数
            flowControl: 'hardware', // 流控模式(none或hardware)。
            bufferSize: 1024 // 读取缓冲区的大小
        });
        const reader = port.readable.getReader();
        // 监听来自串口的数据
        setInterval(async() => {
            const { value, done } = await reader.read();
            // value 是一个 Uint8Array
            // 将其转换为字符串
            const tmpStr = new TextDecoder().decode(value);
            if(tmpStr.charCodeAt() !== 13) {
                setSerialRecv(tmpStr.trim());
            }
        },2000);
    }
}