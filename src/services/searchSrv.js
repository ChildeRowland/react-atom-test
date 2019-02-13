
const searchSrv = {

	getResults: function (searchStr) {

		searchStr = searchStr || '';

		const result = searchStr.split('');

		return new Promise (function(resolve, reject) {
			setTimeout(() => {
				resolve(result);
			}, 3000);
		});
		
	}
	
	// example axios request
	// getSearchResults: function (searchStr) {
	// 	return axios({
	// 		method: 'GET',
	// 		url: '/search',
	// 		params: {
	// 			searchStr: searchStr
	// 		}
	// 	})
	//   .then(function (response) {
	//     // handle success
	//     return response;
	//   })
	//   .catch(function (error) {
	//     // handle error
	//     console.log(error);
	//   })
	//   .then(function () {
	//     // always executed
	//   });
	// }
	
};

export default searchSrv