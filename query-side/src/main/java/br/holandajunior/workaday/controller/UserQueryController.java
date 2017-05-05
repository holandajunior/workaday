package br.holandajunior.workaday.controller;

import br.holandajunior.workaday.exceptions.ResourceNotFoundException;
import br.holandajunior.workaday.model.Point;
import br.holandajunior.workaday.model.User;
import br.holandajunior.workaday.repository.UserRepository;
import br.holandajunior.workaday.rest.RestResponse;
import br.holandajunior.workaday.services.api.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public RestResponse findAll() {
        List<User> users = userService.findAll();
        return new RestResponse( users, null, HttpStatus.OK.value() );
    }

    @RequestMapping("/{id}/points")
    public RestResponse findOne(@PathVariable("id") Long id ) throws ResourceNotFoundException {
        List<Point> points = userService.findOne( id ).getPoints();
        return new RestResponse( points, null, HttpStatus.OK.value() );
    }

}
