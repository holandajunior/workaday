package br.holandajunior.workday.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * Created by holandajunior on 02/05/17.
 */

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable().authorizeRequests()
            .antMatchers("/").permitAll()
            .antMatchers(HttpMethod.POST, "/signup").permitAll()
            .antMatchers(HttpMethod.POST, "/login").permitAll()
            .anyRequest().authenticated()
            .and()

            // We filter the api/login requests
            .addFilterBefore(new RestLoginFilter("/login", authenticationManager()),
                    UsernamePasswordAuthenticationFilter.class)

            // And filter other requests to check the presence of JWT in header
            .addFilterBefore(new RestAuthenticationFilter(),
                    UsernamePasswordAuthenticationFilter.class);
    }

}
