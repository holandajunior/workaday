package br.holandajunior.workday.controllers;

import br.holandajunior.workaday.events.user.UserCreated;
import br.holandajunior.workday.commands.CreateUser;
import br.holandajunior.workday.models.User;
import br.holandajunior.workday.repositories.IUserRepository;
import br.holandajunior.workday.services.api.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.async.DeferredResult;

import javax.validation.Valid;

/**
 * Created by holandajunior on 29/04/17.
 */

@RestController
@RequestMapping("/users")
public class UserCommandController {

    @Autowired
    private IUserService userService;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public DeferredResult< ResponseEntity<Void> > save(@Valid @RequestBody final CreateUser createUserCommand ) {

        final DeferredResult< ResponseEntity<Void> > result = new DeferredResult<ResponseEntity<Void>>();

        new Thread(new Runnable() {

            @Override
            public void run() {

                userService.save( createUserCommand );
                result.setResult( new ResponseEntity<Void>( HttpStatus.CREATED ) );
            }
        }).start();

        return result;

    }
}
