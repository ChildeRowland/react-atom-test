const data = ['a','b','c'];

const searchSrv = {

	getResults: function () {
		return new Promise (function(resolve, reject) {
			setTimeout(() => {
				resolve(data);
			}, 3000);
		});
	}
};

export default searchSrv