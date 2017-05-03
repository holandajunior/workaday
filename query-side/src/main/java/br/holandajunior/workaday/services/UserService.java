package br.holandajunior.workaday.services;

import br.holandajunior.workaday.model.User;
import br.holandajunior.workaday.repository.UserRepository;
import br.holandajunior.workaday.services.api.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by holandajunior on 02/05/17.
 */

@Service
public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepo;

    @Override
    public List<User> findAll() {
        return userRepo.findAll();
    }

    @Override
    public User findOne(long id) {
        return userRepo.findByUserId( id );
    }
}
