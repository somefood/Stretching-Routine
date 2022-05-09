const Test = {
    async 처음로딩() {
        return await new Promise((r, rj) => {
            setTimeout(() => {
                r('통신 중');
            }, 500);
        });
    },
};

export default Test;
