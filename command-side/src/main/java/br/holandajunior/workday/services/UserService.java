package br.holandajunior.workday.services;

import br.holandajunior.workaday.events.user.UserCreated;
import br.holandajunior.workday.commands.CreateUser;
import br.holandajunior.workday.models.repository.User;
import br.holandajunior.workday.repositories.IUserRepository;
import br.holandajunior.workday.services.api.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * Created by holandajunior on 02/05/17.
 */

@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private JmsTemplate jmsTemplate;

    public void save(CreateUser createUserCommand) {

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode( createUserCommand.getPassword() );

        // Persist new user
        User user = new User();
        user.setUsername( createUserCommand.getUsername() );
        user.setEmail( createUserCommand.getEmail() );
        user.setPassword( hashedPassword );

        User newUser = userRepository.saveAndFlush( user );

        // Send event
        UserCreated userCreated = new UserCreated( newUser.getId(),
                createUserCommand.getUsername(),
                createUserCommand.getEmail() );

        jmsTemplate.convertAndSend( UserCreated.DESTINATION, userCreated );

    }
}
