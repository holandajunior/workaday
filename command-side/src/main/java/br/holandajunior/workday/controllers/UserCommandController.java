package br.holandajunior.workday.controllers;

import br.holandajunior.workaday.events.user.UserCreated;
import br.holandajunior.workday.commands.CreateUser;
import br.holandajunior.workday.models.User;
import br.holandajunior.workday.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * Created by holandajunior on 29/04/17.
 */

@RestController
@RequestMapping("/users")
public class UserCommandController {

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private JmsTemplate jmsTemplate;

    @RequestMapping( value = "/save", method = RequestMethod.POST )
    public void save(@Valid @RequestBody CreateUser createUserCommand ) {

        // Persist new user
        User user = new User();
        user.setName( createUserCommand.getName() );
        user.setEmail( createUserCommand.getEmail() );
        user.setPassword( createUserCommand.getPassword() );

        userRepository.save( user );


        // Send event
        UserCreated userCreated = new UserCreated( createUserCommand.getName(),
                                                   createUserCommand.getEmail() );

        jmsTemplate.convertAndSend( UserCreated.DESTINATION, userCreated );

    }
}