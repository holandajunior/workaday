package br.holandajunior.workaday.controller;

import br.holandajunior.workaday.model.User;
import br.holandajunior.workaday.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

/**
 * Created by holandajunior on 29/04/17.
 */

@RestController
@RequestMapping("/users")
public class UserQueryController {

    @Autowired
    private UserRepository userRepo;

    @RequestMapping
    public List<User> findAll() {
        return userRepo.findAll();
    }

    @RequestMapping("/{id}")
    public User findOne( @PathVariable("id") Long id ) {
        return userRepo.findOne( id );
    }

}
