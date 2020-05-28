import React from "react";
import List from "../List/List";
import styles from "./app.module.css";

const App = () => {
	return (
		<div className={styles.app}>
			<List></List>
		</div>
	);
};

export default App;
