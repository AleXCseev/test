import React, { Component } from "react";
import ListItem from "../List-item/List-item";
import { data } from "../../data/data";
import styles from "./list.module.css";

export default class List extends Component {
	state = {
		base: null,
		rates: null,
		error: false,
	};
	componentDidMount() {
		data.then((response) => {
			this.setState({
				base: response.base,
				rates: Object.entries(response.rates),
				error: false,
			});
		}).catch(() => {
			this.setState({
				base: null,
				rates: null,
				error: true,
			});
		});
	}

	createListItems = () => {
		const { rates } = this.state;
		if (rates) {
			const lists = rates.map((item, index) => {
				return (
					<li className={styles.item} key={index}>
						<ListItem data={item}></ListItem>
					</li>
				);
			});
			return lists;
		}
	};

	render() {
		if (!this.state.error) {
			return (
				<div>
					<h1 className={styles.title}>{this.state.base}</h1>
					<ul className={styles.list}>{this.createListItems()}</ul>
				</div>
			);
		} else {
			return (
				<div>
					<h1>Error!!!</h1>
				</div>
			);
		}
	}
}
