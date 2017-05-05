package br.holandajunior.workaday.services.api;

import br.holandajunior.workaday.exceptions.ResourceNotFoundException;
import br.holandajunior.workaday.model.User;

import java.util.List;

/**
 * Created by holandajunior on 02/05/17.
 */
public interface IUserService {

    List<User> findAll();
    User findOne( long id ) throws ResourceNotFoundException;

}
