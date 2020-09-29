import { all, fork } from 'redux-saga/effects'
import watchAuthSaga from "../components/auth/auth.saga";
import watchUserSaga from "../components/user/user.saga";

export default function* rootSaga() {
    yield all([
        fork(watchAuthSaga),
        fork(watchUserSaga),
    ]);
}



/**
 call：函数调用
 select：获取Store中的数据
 put：向Store发送action
 take：在Store上等待指定action
 fork：和call类似，但是是非阻塞的，立即返回

 takeEvery = take -> fork -> take -> fork …循环。 当接收到指定action时，会启动一个worker saga，并驱动其中的 yield 调用。

 apply(obj, obj.method, [arg1, arg2, ...]) 与 call 指令功能相同，就写法不一样。
 cancel(task) 命令 middleware 取消之前的一个 fork 任务。与之对应的cancelled指令可以指定取消任务需要执行的操作。
 race(effects) 类似Promise.race功能，在多个 Effects 之间触发一个竞赛，谁先完成就结束整个 Effect，失败方自动取消。

 */
