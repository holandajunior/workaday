package br.holandajunior.workaday.controller;

import br.holandajunior.workaday.model.Point;
import br.holandajunior.workaday.model.User;
import br.holandajunior.workaday.repository.UserRepository;
import br.holandajunior.workaday.services.api.IUserService;
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
    private IUserService userService;

    @RequestMapping
    public List<User> findAll() {
        return userService.findAll();
    }

    @RequestMapping("/{id}/points")
    public List<Point> findOne(@PathVariable("id") Long id ) {
        return userService.findOne( id ).getPoints();
    }

}
