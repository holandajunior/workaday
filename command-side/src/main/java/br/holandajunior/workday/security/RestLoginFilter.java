package br.holandajunior.workday.security;

import br.holandajunior.workday.models.security.AuthCredentials;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.util.StringUtils;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by holandajunior on 02/05/17.
 */
public class RestLoginFilter extends AbstractAuthenticationProcessingFilter {


    public RestLoginFilter(String url, AuthenticationManager authManager) {
        super(new AntPathRequestMatcher(url));
        setAuthenticationManager(authManager);
    }

    @Override
    public Authentication attemptAuthentication ( HttpServletRequest req,
                                                  HttpServletResponse res) throws AuthenticationException,
                                                                                  IOException,
                                                                                  ServletException {

        AuthCredentials credentials = new ObjectMapper().readValue(req.getInputStream(), AuthCredentials.class);

        if (StringUtils.isEmpty(credentials.getUsername()) || StringUtils.isEmpty(credentials.getPassword())) {
            throw new AuthenticationServiceException("Username or Password not provided");
        }

        return getAuthenticationManager().authenticate(
            new UsernamePasswordAuthenticationToken( credentials.getUsername(), credentials.getPassword())
        );
    }

    @Override
    protected void successfulAuthentication ( HttpServletRequest req, HttpServletResponse res,
                                              FilterChain chain, Authentication auth) throws IOException,
                                                                                             ServletException {

        String token = JWTAuthenticationUtils.generateToken( auth.getName() );

        res.setStatus( HttpStatus.OK.value() );
        res.setContentType( MediaType.APPLICATION_JSON_VALUE );

        res.getWriter().write( String.format( "{ \"token\": \"%s\" }", token ) );
    }


}