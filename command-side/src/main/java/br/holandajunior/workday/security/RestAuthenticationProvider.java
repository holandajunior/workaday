package br.holandajunior.workday.security;

import br.holandajunior.workday.models.repository.User;
import br.holandajunior.workday.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

/**
 * Created by holandajunior on 02/05/17.
 */
@Component
public class RestAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    private BCryptPasswordEncoder encoder;
    @Autowired
    private IUserRepository userRepository;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        String username = (String) authentication.getPrincipal();
        String password = (String) authentication.getCredentials();

        User user = userRepository.findByUsername(username);
        if( user == null )
            throw new UsernameNotFoundException( "Username not found: " + username );

        if( !encoder.matches( password, user.getPassword() ) ) {
            throw new BadCredentialsException("Authentication Failed. Username or Password not valid.");
        }

        return new UsernamePasswordAuthenticationToken(username, password);

    }

    @Override
    public boolean supports(Class<?> authentication) {
        return (UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication));
    }
}
