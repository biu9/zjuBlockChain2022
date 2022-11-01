### 基于区块链以及边缘计算的手势投票应用

#### 使用

> 由于本项目尚未发布,需要用户先参考/src/contract文件夹中的合约代码编译部署合约
> /src/contract中有两种合约，一种是投票合约，每次发起投票都会生成一个新的投票合约，一种是初始化合约，用于控制每个账户的代币数量
> 初始化合约我是在remix上部署的,投票合约则是每次投票都会由js代码调用web3.js生成一个

0. 可选:点击open serial按钮选择串口,开启手势识别功能
1. 点击右侧get init coin获取初始化代币
2. 左侧键盘点击执行对应操作，左滑&confirm后投反对票,右滑&confirm后投赞成票
3. 点击initiate proposal发起一次投票

#### 技术栈

- react
- redux-toolkit
- tailwindcss
- solidity
- tensorflowlite(边缘计算端)