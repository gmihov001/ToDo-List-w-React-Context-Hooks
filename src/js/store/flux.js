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
			addTask: task => {
				var updatedTaskList = getStore().taskList.concat({ label: task, done: false });
				setStore({ taskList: updatedTaskList });
				fetch("https://assets.breatheco.de/apis/fake/todos/user/georgi_todolist", {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(updatedTaskList)
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(err => console.log("There was the following error: ", err));
			},
			deleteTask: ind => {
				var updatedTaskList = getStore().taskList.filter((task, i) => i != ind);
				setStore({ taskList: updatedTaskList });
				fetch("https://assets.breatheco.de/apis/fake/todos/user/georgi_todolist", {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(updatedTaskList)
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(err => console.log("There was the following error: ", err));
			},
			changeColor: (index, color) => {
				const store = getStore();
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
