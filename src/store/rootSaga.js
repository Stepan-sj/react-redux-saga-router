import homeSaga from '../pages/Home/store/saga'

function* rootSaga(){
    yield homeSaga()  //执行子模块saga 必须要加 yield
}

export default rootSaga;
