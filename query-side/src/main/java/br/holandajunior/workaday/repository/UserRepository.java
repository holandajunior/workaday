package br.holandajunior.workaday.repository;

import br.holandajunior.workaday.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

/**
 * Created by holandajunior on 01/05/17.
 */
public interface UserRepository extends MongoRepository<User, String >, UserRepositoryCustom {

    @Query(value = "{}", fields = "{ 'name':1, 'email':1 }")
    List<User> findAll();

    User findByUserId( long userId );
}
