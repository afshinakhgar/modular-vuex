export function doLogin({dispatch}){
	this.$http.get("/login.json").then(
		(response) => {
			dispatch("SETLOGIN",JSON.parse(response.data));
		},
		(error)=> {
			console.error(error.statusText);
		}
	)
}