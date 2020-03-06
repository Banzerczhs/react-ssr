import {createStore,applyMiddleware} from "redux";
import rootReducers from "../reducers";
import Sagas from "../sagas";
import createSagaMiddleware from "redux-saga";

const configureStore=(preloadState)=>{
    const sagaMiddleware=createSagaMiddleware();
    const store=createStore(
        rootReducers,
        preloadState,
        applyMiddleware(sagaMiddleware)
    )

    sagaMiddleware.run(Sagas);

    if(module.hot){
        module.hot.accept('../reducers', ()=>{
            store.replaceReducer(rootReducers)
        })
    }

    return store;
}


export default configureStore;

