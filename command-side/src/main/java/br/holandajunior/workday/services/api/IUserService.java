package br.holandajunior.workday.services.api;

import br.holandajunior.workday.commands.CreateUser;

/**
 * Created by holandajunior on 02/05/17.
 */
public interface IUserService {

    void save(CreateUser createUserCommand);
}
