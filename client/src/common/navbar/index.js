import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import footballLogo from '../../assets/stadium.svg';
import styled from 'styled-components';
import './index.css';


const Header = Layout.Header;

class AppHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nav: false,
		}
	}

	componentDidMount() {
		document.querySelector('body').addEventListener('click', (e) => {
			const elements = e.path || (e.composedPath && e.composedPath());
			if (this.state.nav) {
				if (elements[0].tagName !== 'NAV' && elements[1].tagName !== 'NAV') {
					document.querySelector('.sidebar-nav').style.width = '0px';
					this.setState({
						nav: false,
					});
				}
			}
		});
	}

	actionLogout = () => {
		this.props.onLogout();
	}

	openNav = () => {
		document.querySelector('.sidebar-nav').style.width = '100px';

		this.setState({
			nav: true,
		});
	}

	// Dont touch
	render() {
		return (
			<>
				<div class="mobile-top_bar">
					<p>Score A Match</p>
					<i class="fas fa-bars" onClick={this.openNav}></i>
				</div>
				<nav class="sidebar-nav">
					<div class="logo-area">
						<img src={footballLogo} alt="Logo" />
					</div>
					<div class="menu-container" style={{ textAlign: "center" }}>
						<ul>
							<li>
								<NavLink exact={true} activeClassName='is-active' to="/">
									<i className="fas fa-home"></i>
								</NavLink>
							</li>
							<li>
								<NavLink exact={true} activeClassName='is-active' to="/admin">
									<i className="fas fa-user-shield"></i>
								</NavLink>
							</li>
							<li><i class="fas fa-calendar-check"></i></li>
						</ul>
						<ul class="logout-ul">
							<li onClick={this.actionLogout}><i class="fas fa-sign-out-alt"></i></li>
						</ul>
					</div>
				</nav>
			</>
		)
	}
}

export default withRouter(AppHeader);
