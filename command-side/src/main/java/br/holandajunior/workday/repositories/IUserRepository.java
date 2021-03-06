package br.holandajunior.workday.repositories;

import br.holandajunior.workday.models.repository.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by holandajunior on 29/04/17.
 */
public interface IUserRepository extends JpaRepository< User, Long > {

    User findByUsername( String username );
}
