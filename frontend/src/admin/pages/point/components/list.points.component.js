import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// Internal dependencies
import actions from '../actions';
import { loadingWrapper } from 'appComponents';
import 'appStyle';

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
					<h3 className="panel-title">Usuários</h3>
				</div>
				<Link to="/system/users/add"> <button type="button" className="btn btn-primary"><i className="fa fa-plus" /> Novo usuário </button></Link>
				<div className="panel-body">
					<table className="table table-striped">
						<thead>
							<tr>
								<th>#</th>
								<th>Nome</th>
								<th>Email</th>
								<th>Grupo</th>
								<th>Status</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody>
							
							{
								points.map( ( user, index ) => {
									
									return (		
									<tr key={ index }>
										<td>{ index }</td>
										<td>{ `${user.firstName} ${user.lastName}` }</td>
										<td>{ user.email }</td>
										<td>{ user.role }</td>
										<td>{ user.active ? (
												<span className="label label-active">Ativo </span>
											) : (
												<span className="label label-inactive">Inativo </span>) }</td>
										<td>
											<Link to={`/system/users/update/${user._id.$oid}`}> <button type="button" className="btn btn-action btn-xsm"><i className="fa fa-edit" /></button> </Link>
											<span className="divider" />
											<button type="button" className="btn btn-action btn-xsm" onClick={ () => this.props.userRemove( index, user._id ) }><i className="fa fa-trash" /></button>
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
		points: [
			{
				_id: {
					$oid: "123"
				},
				index: 1,
				firstName: "Holanda",
				lastName: "Junior",
				email: "holanda@gmail.com",
				role: "admin",
				active: true
			}
		]
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