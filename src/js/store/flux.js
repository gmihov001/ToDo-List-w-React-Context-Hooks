const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			taskList: [{ label: "Sample", done: false }]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadFetchData: () => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/georgi_todolist")
					.then(response => response.json())
					.then(data => setStore({ taskList: data }))
					.catch(err => console.log("There was the following error: ", err));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
