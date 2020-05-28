import React, { Fragment } from "react";
import styles from "./list-item.module.css";

const ListItem = (props) => {
	return (
		<Fragment>
			<span className={styles.name}>{`${props.data[0]}:     ${props.data[1]}`}</span>
		</Fragment>
	);
};

export default ListItem;
