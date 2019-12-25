import { put, call, takeEvery,take } from 'redux-saga/effects'
// import fetch from 'fetch'

function* requestList(){
    yield takeEvery('list',getList)
    // let one = yield take('list')
    // console.log(one)
}

function* getList(){
    let res = yield fetch('http://inner.meeno.net:10420/zhubao-service/backstage/agreement/file/get.action',{pageNum: 1,pageSize: 10})

    let data = yield res.json()

    // console.log(data)

    yield put({type: 'getList',data})
}

export default requestList;
