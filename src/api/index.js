import axios from "axios";

const 처음로딩 = () => {
    return new Promise((r, rj) => {
        setTimeout(() => {
            r('통신 중') 
        }, 500);
    })
}

export {
    처음로딩,
}