package br.holandajunior.workaday.repository;

import br.holandajunior.workaday.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by holandajunior on 01/05/17.
 */
public interface UserRepository extends MongoRepository<User, String >, UserRepositoryCustom {

    User findByUserId( long userId );
}
