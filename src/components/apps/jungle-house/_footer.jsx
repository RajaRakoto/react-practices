import React from 'react';

/* datas */
import githubIco from '../../../assets/icons/github-ico.svg';

/* mui */
import Button from '@mui/material/Button';

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="container-fluid">
				<div className="row">
					<div className="col-12-sm col-md-6">
						<div className="footer--1">
							<img src={githubIco} alt="github-link" width={50} />
							<h6>Pour les passionné(es) de plantes 🌿🌱🌵</h6>
						</div>
					</div>
					<div className="col-12-sm col-md-6">
						<div className="footer--2">
							<div id="email" className="input-group input-group-sm">
								<div className="input-group-prepend">
									<span className="input-group-text" id="inputGroup-sizing-sm">
										Laissez-nous votre mail
									</span>
								</div>
								<input
									name="email"
									type="text"
									className="form-control"
									aria-label="Small"
									aria-describedby="inputGroup-sizing-sm"
								/>
							</div>
							<Button variant="contained" color="primary" className="email-btn">
								Enregistrer
							</Button>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
