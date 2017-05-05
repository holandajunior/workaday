import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';

// Internal dependencies
import actions from '../actions';
import { loadingWrapper } from 'appComponents';
import 'appStyle';

const FORMAT_DATE = "MMMM Do YYYY, h:mm:ss";

class ListPoints extends React.Component {

	componentDidMount() {
		const { dispatch } = this.props;
		
		dispatch( actions.findRequest() );
	}

	render() {

		const { points } = this.props;

		return (
						
			<div className="panel">
				<div className="panel-heading">
					<h3 className="panel-title">My work hours</h3>
				</div>
				<div className="panel-body">
					<table className="table table-striped">
						<thead>
							<tr>
								<th>#</th>
								<th>Entrada</th>
								<th>Saida</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody>
							
							{
								points.map( ( point, index ) => {
									
									return (		
									<tr key={ point.pointId }>
										<td>{ point.pointId }</td>
										<td>{ moment( point.entry ).format(FORMAT_DATE) }</td>
										<td>{ point.exit ? moment( point.exit ).format(FORMAT_DATE) : "Not set yet" }</td>
										<td>
											<Link to={`/point/update/${point.pointId}`}> <button disabled type="button" className="btn btn-action btn-xsm"><i className="fa fa-edit" /></button> </Link>
										</td>
									</tr>
									)
								} )
							}
							
						</tbody>
					</table>
				</div>
			</div>
		);

	}
}

const mapStateToProps = ( state ) => {
	return {
		loading: state.point.meta.isRequesting,
		points: state.point.payload.entities || []
	}
};

const mapDispatchToProps = ( dispatch ) => (
	{
		userRemove: ( index, _id ) => {
			dispatch( actions.removeRequest( index, _id.$oid ) );
		},
		dispatch
	}
);



export default connect(mapStateToProps, mapDispatchToProps)(  loadingWrapper(ListPoints) );