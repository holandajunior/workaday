package br.holandajunior.workday.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * Created by holandajunior on 02/05/17.
 */

public class RestAuthenticationFilter extends GenericFilterBean {

    @Override
    public void doFilter ( ServletRequest request,
                           ServletResponse response,
                           FilterChain filterChain) throws IOException, ServletException {

        // Check out if request header contains AUTH_TOKEN
        Authentication authentication = JWTAuthenticationUtils.getAuthentication( (HttpServletRequest) request );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        filterChain.doFilter( request, response);
    }
}